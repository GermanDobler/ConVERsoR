import { Fragment , useState} from "react";
import "./styles/Glassmorphism.css";
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";
import Header from "./Header";

import { Canvas } from '@react-three/fiber' //Importo el componente Canvas de RTF
import { BitcoinModel } from "./BitcoinModel"; //Importo el modelo 3d del bitcoin de su propio componente
import { EthereumModel } from "./EthereumModel"; //Lo mismo con la moneda de ETH

export default function Converter() {
    const resolvePackage = (p) => {
        console.log("g")
    }
    
    return(
        <Fragment>
            <div className="contenedor-convertidor Glassmorphism">
                <Header />
                <InputForm />
                <OutputForm />
                
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