import { Canvas } from '@react-three/fiber'

export default function Model3d() {
    return(
        <div>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <pointLight position={[-10, -10, -10]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]}/>
                    <meshStandardMaterial color="hotpink" />
                </mesh>
            </Canvas>
        </div>
    )
}