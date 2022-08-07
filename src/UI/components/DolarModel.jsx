import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function DolarModel(props) {
    const myMesh = useRef();
  const { nodes, materials } = useGLTF("/dolarcoin.gltf");
    useFrame(({clock})=>{
        myMesh.current.rotation.z = clock.getElapsedTime() 
    })
  return (
    <group {...props} dispose={null} position={props.pos}>
      <group
        position={[0, 0, 0]}
        rotation={[1.5708, 0 ,1.5708 ]}
        scale={[10, 10, 10]}
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
