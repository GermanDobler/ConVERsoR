import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export function EthereumModel(props) {
    const myMesh = useRef();
    const myMesh2 = useRef();
  const { nodes, materials } = useGLTF("/ethereumcoinpurple.gltf");
  useFrame(({clock})=>{
    myMesh.current.rotation.y = clock.getElapsedTime()
    myMesh2.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI, 0, 0]} scale={3.4} position={props.pos}>
        <mesh
          ref={myMesh}
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials["Material.002"]}
          rotation={[0, 0, 0]}
        />
        <mesh
          ref={myMesh2}
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials["Material.001"]}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ethereumcoinpurple.gltf");
