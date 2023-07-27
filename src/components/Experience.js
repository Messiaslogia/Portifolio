import React, { useRef } from 'react';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export default function Experience() {
    const skate = useGLTF('./skateboard.glb');
    const groupRef = useRef();

    useFrame(() => {
        groupRef.current.rotation.z += 0.05; // Ajuste o valor para controlar a velocidade da rotação
    });

    const { camera } = useThree();
    camera.position.set(-7, 4, 5); // Modifique a posição da câmera aqui
    // camera.lookAt(new Vector3(0, 0, 0));

    return (
        <>
            <OrbitControls enableZoom={false} />
            <group ref={groupRef}>
                <primitive object={skate.scene} scale="1.1" />
            </group>
            <Environment preset="city" />
        </>
    );
}
