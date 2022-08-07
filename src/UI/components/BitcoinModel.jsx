import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber'

export function BitcoinModel(props) {
    const myMesh = useRef();
    const myMesh2 = useRef();
  const { nodes, materials } = useGLTF("/coin.gltf");
  useFrame(({clock})=>{
    myMesh.current.rotation.y = clock.getElapsedTime()
    myMesh2.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <group {...props} dispose={null} scale={12} position={props.pos}>
      <mesh
        ref={myMesh}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials["Material.002"]}
        rotation={[0, 0, 0]}
      />
      <mesh
        ref={myMesh2}
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials["Material.003"]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/coin.gltf");
