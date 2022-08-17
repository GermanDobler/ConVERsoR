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
            className="canvas-coin"
            style={{}}
            camera={ { fov: 5, near: 0.1, far: 1000, position: [-800, 0, 20] } }
            >   
            <ambientLight intensity={0.9} /> 
            
                    {/* Una luz puntual con una intensidad de 0.9 y una posición en el escenario definida por un vector */}
                    <pointLight position={[10, 10, 10]} /> 

                    {/* Una luz puntual con una intensidad de 0.9 y una posición en el escenario definida por un vector 3*/}
                    <pointLight position={[-10, -10, -10]} />

                    {coinState === "btc" ? <BitcoinModel pos={[0, -8, 0]}/> : null}
                    {coinState === "eth" ? <EthereumModel pos={[0, -8, 0]}/> : null}
                    {coinState === "sol" ? <SolanaModel  pos={[0, -8, 0]}/> : null}
                    {coinState === "ars" ? <ArsModel pos={[0, -8, 0]}/> : null}
                    {coinState === "eur" ? <EuroModel pos={[0, -8, 0]}/> : null}
                    {coinState === "dlblue" ? <DolarModel pos={[0, -8, 0]}/> : null}
                    {coinState === "dloficial" ? <DolarModel pos={[0, -8, 0]} /> : null}

            </Canvas>
        </div>
    )
}