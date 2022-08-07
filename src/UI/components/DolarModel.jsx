import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function DolarModel(props) {
    const myMesh = useRef();
  const { nodes, materials } = useGLTF("/dolarcoin.gltf");
    useFrame(({clock})=>{
        myMesh.current.rotation.y = clock.getElapsedTime() * 1.2
    })
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.14, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.81}
        ref={myMesh}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/dolarcoin.gltf");
