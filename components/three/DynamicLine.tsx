import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

type DynamicLineProps = {
    startRef: THREE.Mesh | null
    endRef: THREE.Mesh | null
}

export default function DynamicLine(props: DynamicLineProps) {
    const {startRef, endRef} = props;
    const [line, setLine] = useState<THREE.Line | null>(null);
    const geometryRef = useRef(new THREE.BufferGeometry());
    const materialRef = useRef(new THREE.LineBasicMaterial({
        color: "rgb(0, 225, 255)",
        transparent: true,
        opacity: 1
    }))

    useEffect(() => {
        const positions = new Float32Array(6);

        geometryRef.current.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        setLine(new THREE.Line(geometryRef.current, materialRef.current));
    }, []);

    useFrame(() => {
        if (!line || !startRef || !endRef) {
            return;
        }

        const positions = geometryRef.current.attributes.position.array;

        if (
            positions[0] == startRef.position.x &&
            positions[1] == startRef.position.y &&
            positions[3] == endRef.position.x &&
            positions[4] == endRef.position.y
        ) {
            return;
        }

        positions[0] = startRef.position.x;
        positions[1] = startRef.position.y;
        positions[3] = endRef.position.x;
        positions[4] = endRef.position.y;

        const dx = Math.abs(positions[0] - positions[3])
        const dy = Math.abs(positions[1] - positions[4])
        const dist = Math.max(dx, dy)
        const s = 1.2375 - 1.1875 * dist;

        materialRef.current.opacity = Math.max(0, Math.min(s, 1));

        geometryRef.current.attributes.position.needsUpdate = true;
    });

    return line ? (
        <primitive
            object={line}
            transparent
            opacity={.1}
        />
        ) : null;
}