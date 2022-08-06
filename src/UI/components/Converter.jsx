import { Fragment , useState} from "react";
import "./styles/Glassmorphism.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import Model3d from "./Model3d";
import { Canvas, useThree } from '@react-three/fiber'
import { useSpring, animated } from '@react-spring/three'
import { Model } from "./Model";
import { useGLTF } from "@react-three/drei";
export default function Converter() {
    const [toggle, setToggle] = useState(false);
    const [isHover, setIsHover] = useState(false);
    var m1 = "Peso";
    var m2 = "Dólar";
    var inputCoin = "";
    var result = "";
    const handleInputCoin = () => {
        console.log("handleInputCoin");
    }

    const {scale} = useSpring({ scale: toggle ? 1.5 : 1 })
    const {position} = useSpring({ position: isHover ? [0, 0, 5] : [0, 0, 0] })

    return(
        <Fragment>
            <div className="contenedor-convertidor Glassmorphism">

                <div className="convertidor-form-input Glassmorphism-2">

                <p className="header-text">INPUT A COIN</p>
                <div>
                    <FormControl fullWidth>
                        <InputLabel id="input-select-label">Select Coin</InputLabel>
                        <Select
                            labelId="input-select-label"
                            id="input-select"
                            value={inputCoin}
                            label="Select Coin"
                            onChange={handleInputCoin}
                        >
                            <MenuItem value="ARS">Peso argentino</MenuItem>
                            <MenuItem value="DLBLUE">Dolar Blue</MenuItem>
                            <MenuItem value="DLOFICIAL">Dolar Oficial</MenuItem>
                            <MenuItem value="EUR">Euro</MenuItem>
                        
                        </Select>
                    </FormControl>
                </div>
                <div className="result-container">
                    <p className="result-value">{result}</p>
                </div>
                </div> 

                <div className="convertidor-form-output Glassmorphism-2">
                    <p >OUTPUT COIN</p>
                </div>
                

                <div className="model-container">
                    <Canvas camera={ { fov: 75, near: 0.1, far: 1000, position: [-15, 0, 20] } } >
                        <ambientLight intensity={0.25} />
                        <pointLight position={[10, 10, 10]} />
                        <pointLight position={[-10, -10, -10]} />
                        <Model/>
                        {/* <animated.mesh 
                        scale={scale} 
                        position={position}
                        onClick={()=>{setToggle(!toggle)}}
                        onPointerEnter={()=>{setIsHover(!isHover)}}
                        onPointerLeave={()=>{setIsHover(!isHover)}}
                        >
                            <boxGeometry args={[4, 4, 4]}/>
                            <meshStandardMaterial color="hotpink" />
                        </animated.mesh> */}
                    </Canvas>
                </div>

            </div>
        </Fragment>
    )
}