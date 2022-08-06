import { Fragment , useState} from "react";
import "./styles/Glassmorphism.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

import { Canvas } from '@react-three/fiber' //Importo el componente Canvas de RTF
import { BitcoinModel } from "./BitcoinModel"; //Importo el modelo 3d del bitcoin de su propio componente
import { EthereumModel } from "./EthereumModel"; //Lo mismo con la moneda de ETH

export default function Converter() {

    var m1 = "Peso";
    var m2 = "Dólar";
    var inputCoin = "";
    var result = "";

    const handleInputCoin = () => {
        console.log("handleInputCoin");
    }


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
                
                {/*Un contenedor que contenga el modelo 3d del bitcoin y el modelo 3d del ethereum*/}

                <div className="input-coin-container">
                    <Canvas 
                    camera={ { fov: 5, near: 0.1, far: 1000, position: [-400, 0, 20] } } 
                    >   
                        {/* Una luz ambiental con una intensidad de 0.9 */}
                        <ambientLight intensity={0.9} /> 

                        {/* Una luz puntual con una intensidad de 0.9 y una posición en el escenario definida por un vector */}
                        <pointLight position={[10, 10, 10]} /> 

                        {/* Una luz puntual con una intensidad de 0.9 y una posición en el escenario definida por un vector 3*/}
                        <pointLight position={[-10, -10, -10]} />


                        {/* Importacion de los modelos 3d */}
                        <BitcoinModel/> 
                        <EthereumModel/>

                    </Canvas>
                </div>
            </div>
        </Fragment>
    )
}