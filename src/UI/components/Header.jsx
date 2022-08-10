import { Canvas } from "@react-three/fiber";
import { Fragment } from "react";
import {Logo} from "./Logo";
import "./styles/Glassmorphism.css";
export default function Header() {
    return (
        <Fragment>
            <Canvas camera={ { fov: 5, near: 0.1, far: 1000, position: [-20, 0, 20] } }>
                <directionalLight intensity={3.5} position={[-10, 0, 0]} color="white" />
                {/* <directionalLight intensity={1} position={[-10, 0, 25]} color="#05ffee" /> */}
                <Logo />
            </Canvas>
        </Fragment>
    );
}