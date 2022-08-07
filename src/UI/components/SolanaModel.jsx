import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function SolanaModel(props) {
  const myMesh = useRef();

  const { nodes, materials } = useGLTF("/solanacoin.gltf");
  useFrame(({clock})=>{
    myMesh.current.rotation.y = clock.getElapsedTime()
  })
  return (
    <group {...props} dispose={null}>
      <group position={props.pos} scale={1.3} ref={myMesh}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_2.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/solanacoin.gltf");