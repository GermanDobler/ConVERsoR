import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function ArsModel(props) {
    const myMesh = useRef();
  const { nodes, materials } = useGLTF("/arscoin.gltf");
    useFrame(({clock})=>{
        myMesh.current.rotation.y = clock.getElapsedTime()
    })
  return (
    <group {...props} position={props.pos} dispose={null} ref={myMesh} scale={11.4}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_1.geometry}
        material={materials["Material.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder_2.geometry}
        material={materials["Material.002"]}
      />
    </group>
  );
}

useGLTF.preload("/arscoin.gltf");
