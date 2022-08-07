import "./styles/Glassmorphism.css"
import { useState } from "react";

import { Canvas } from '@react-three/fiber' //Importo el componente Canvas de RTF
import { BitcoinModel } from "./BitcoinModel"; //Importo el modelo 3d del bitcoin de su propio componente
import { EthereumModel } from "./EthereumModel"; //Lo mismo con la moneda de ETH
import { SolanaModel} from './SolanaModel.jsx';
import { EuroModel } from "./EuroModel";
import { DolarModel } from "./DolarModel";
import { ArsModel } from "./ArsModel";

export default function InputCoin(props) {
    const [coin, setCoin] = useState(props.inputCoin); //Estado de la moneda seleccionada

    return(
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
                {coin === "btc" ? <BitcoinModel /> : null}
                {coin === "eth" ? <EthereumModel /> : null}
                {coin === "sol" ? <SolanaModel /> : null}
                {coin === "ars" ? <ArsModel /> : null}
                {coin === "eur" ? <EuroModel /> : null}
                {coin === "dlblue" ? <DolarModel /> : null}
                {coin === "dloficial" ? <DolarModel /> : null}

            </Canvas> 
        </div>
    )
}