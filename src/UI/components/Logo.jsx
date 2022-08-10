import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Logo(props) {
    const mesh = useRef();
  const { nodes, materials } = useGLTF("/logo.gltf");
  console.log(mesh)
  useFrame(({clock})=>{
    mesh.current.rotation.y = clock.getElapsedTime() * 1.5
  })
  return (
    <group {...props} dispose={null} ref={mesh} scale={1}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.001"]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1, 0.08, 1]}
      />
    </group>
  );
}

useGLTF.preload("/logo.gltf");
