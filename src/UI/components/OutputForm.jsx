import { useState, useEffect } from "react";

import "./styles/Glassmorphism.css";
import "./styles/formsStyles.css";
import { Canvas } from "@react-three/fiber";
import { BitcoinModel } from "./BitcoinModel"; //Importo el modelo 3d del bitcoin de su propio componente
import { EthereumModel } from "./EthereumModel"; //Lo mismo con la moneda de ETH
import { SolanaModel} from './SolanaModel.jsx';
import { EuroModel } from "./EuroModel";
import { DolarModel } from "./DolarModel";
import { ArsModel } from "./ArsModel";
import Info2 from "./Info2";

export default function OutputForm({coinState,data}) {
    return(
        <div className="form-output Glassmorphism-2">
            <p></p>
            <Info2 data={data}></Info2> 
            <Canvas
            camera={ { fov: 5, near: 0.1, far: 1000, position: [-800, 0, 20] } }
            >   
            <ambientLight intensity={0.9} /> 
            
                    {/* Una luz puntual con una intensidad de 0.9 y una posición en el escenario definida por un vector */}
                    <pointLight position={[10, 10, 10]} /> 

                    {/* Una luz puntual con una intensidad de 0.9 y una posición en el escenario definida por un vector 3*/}
                    <pointLight position={[-10, -10, -10]} />

                    {coinState === "btc" ? <BitcoinModel /> : null}
                    {coinState === "eth" ? <EthereumModel /> : null}
                    {coinState === "sol" ? <SolanaModel  /> : null}
                    {coinState === "ars" ? <ArsModel /> : null}
                    {coinState === "eur" ? <EuroModel /> : null}
                    {coinState === "dlblue" ? <DolarModel /> : null}
                    {coinState === "dloficial" ? <DolarModel /> : null}

            </Canvas>
        </div>
    )
}