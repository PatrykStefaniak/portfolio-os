'use client'

import { Canvas } from '@react-three/fiber';
import Scene from './Scene';
import AnimatedZoom from './AnimatedZoom';

export default function Background() {
    return (
        <div className='w-full h-full'>
            <Canvas>
                <ambientLight />
                <directionalLight position={[0, 0, 5]} />
                <AnimatedZoom>
                    <Scene />
                </AnimatedZoom>
            </Canvas>
        </div>
    );
};