
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function EuroModel(props) {
    const myMesh = useRef();
  const { nodes, materials } = useGLTF("/eurocoin.gltf");
    useFrame(({clock})=>{
        myMesh.current.rotation.y = clock.getElapsedTime() * 1.2
    })

  return (
    <group {...props} dispose={null} >
      <group
        position={[0.16, 0.03, 0.01]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.96}
        ref={myMesh}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Text_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/eurocoin.gltf");