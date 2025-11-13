import { animated, useSpring } from "@react-spring/three"
import { ReactNode } from "react"
import { Vector3 } from "three"

export default function AnimatedZoom({ children }: { children: ReactNode} ) {
    const { position } = useSpring({
        position: [0, 0, 0],
        from: { position: [0, 0, 5] },
        config: { friction: 150 }
    });

    return <animated.group position={position as unknown as Vector3}>
        {children}
    </animated.group>
};