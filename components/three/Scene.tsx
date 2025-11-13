'use client'

import { useFrame } from '@react-three/fiber';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Mesh, Vector3 } from 'three';
import DynamicLine from './DynamicLine';
import { getPointsAndRelations } from '@/lib/utils';
import useDebouncedViewportDimentions from '../hooks/useDebouncedViewportDimentions';

const DOT_RADIUS = 0.025;
const FOOTER_HEIGHT = 56;
const SPRING_BACK_FORCE = -0.02;
const MAX_PUSH_FORCE = 0.12;
const REPEL_STRENGTH = 0.05;

export default function Scene() {
    const viewportDimentions = useDebouncedViewportDimentions();
    const pointsAndRelations = useMemo(() => {
        return getPointsAndRelations(viewportDimentions[0], viewportDimentions[1])
    }, [viewportDimentions]);
    const currentPositionsRef = useRef(pointsAndRelations.map(p => [...p.position]));
    const [dots, setDots] = useState<Mesh[]>([]);
    const cursorInWindowRef = useRef(true);
    const mousePosRef = useRef<{x: number, y: number} | null>(null);

    useEffect(() => {
        const handleMouseEnter = () => {
            cursorInWindowRef.current = true;
        };
        const handleMouseLeave = () => {
            cursorInWindowRef.current = false;
        };
        const handleMouseMove = (e: MouseEvent) => {
            mousePosRef.current = { x: e.clientX, y: e.clientY };
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mousemove', handleMouseMove)
        };
    }, []);

    const renderedPoints = useMemo(() => {
        const dotsRefs = new Map<number, Mesh>();
        return pointsAndRelations.map((pointAndRelations, index) => {
            return (
                <mesh
                    key={index}
                    ref={(el) => {
                        if (el) {
                            dotsRefs.set(index, el);

                            if (dotsRefs.size === pointsAndRelations.length) {
                                setDots(
                                    Array.from(
                                        { length: pointsAndRelations.length },
                                        (el, i) => dotsRefs.get(i)
                                    ).filter((ref) => ref != undefined)
                                );

                                dotsRefs.clear();
                            }
                        }
                    }}
                    position={pointAndRelations.position}
                >
                    <circleGeometry args={[DOT_RADIUS]} />
                    <meshStandardMaterial color="#0f0222" />
                </mesh>
            );
        });
    }, [pointsAndRelations]);

    useFrame(({ viewport }) => {
        if (!mousePosRef.current) {
            return;
        }

        const pointer = mousePosRef.current;
        const x = (pointer.x / window.innerWidth) * 2 - 1;
        const y = -(pointer.y / (window.innerHeight - FOOTER_HEIGHT)) * 2 + 1;

        const mouseX = (x * viewport.width) / 2;
        const mouseY = (y * viewport.height) / 2;

        const updatePos = (index: number, pos: Vector3) => {
            currentPositionsRef.current[index] = [pos.x, pos.y, pos.z];
        };
        
        dots.forEach((mesh, i) => {
            if (!mesh) {
                return;
            }

            const position = mesh.position;

            if (cursorInWindowRef.current) {
                const dx = position.x - mouseX;
                const dy = position.y - mouseY;
                const distance = dx * dx + dy * dy;

                if (distance < 1) {
                    const distanceSqrt = Math.sqrt(distance);
                    const currentPos = currentPositionsRef.current[i];
                    const angle = Math.atan2(dy, dx);
                    const strengh =  Math.min(REPEL_STRENGTH * (1 - distanceSqrt) / (distanceSqrt * distanceSqrt), MAX_PUSH_FORCE);

                    position.x = currentPos[0] + Math.cos(angle) * strengh;
                    position.y = currentPos[1] + Math.sin(angle) * strengh;

                    return updatePos(i, position);
                }
            }

            const originalPos = pointsAndRelations[i].position;

            position.x += (position.x - originalPos[0]) * SPRING_BACK_FORCE;
            position.y += (position.y - originalPos[1]) * SPRING_BACK_FORCE;

            updatePos(i, position)
        });
    });

    return (
        <group>
            {renderedPoints}
            {
                dots.length && pointsAndRelations.map((pointAndRelations, index) => (
                    pointAndRelations.relatedTo.map((targetData, targetIndex) => (
                        <DynamicLine
                            key={index + "relation" + targetIndex}
                            startRef={dots[pointAndRelations.index]}
                            endRef={dots[targetData.index]}
                        />
                    ))
                ))
            }
        </group>
    );
};