import { Fragment , useState, useContext} from "react";
import "./styles/Glassmorphism.css";
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";
import Header from "./Header";
import Context from "./Context";
import Info from "./Info";

import { Canvas } from '@react-three/fiber' //Importo el componente Canvas de RTF
import { BitcoinModel } from "./BitcoinModel"; //Importo el modelo 3d del bitcoin de su propio componente
import { EthereumModel } from "./EthereumModel"; //Lo mismo con la moneda de ETH
import ModelPicker from "./ModelPicker";

export default function Converter() {
    const context = useContext(Context);
    const [coin, setCoin] = useState("btc"); //Estado de la moneda seleccionada
    const [array, setArray] = useState([]); //Estado de las conversiones
    const [contador, setContador] = useState(0); //Estado del contador de conversiones
    const EQ = {

        arsTOdlblue: 0.003,
        arsTOdloficial: 0.0075,
        arsTOeur: 0.0074,
        arsTOeth:  0.0000045,
        arsTObtc: 0.00025,
        arsTOsol: 0.00025,

        dlblueTOars: 25,
        dlblueTOeur: 25,
        dlblueTOeth: 25,
        dlblueTObtc: 25,
        dlblueTOSol: 25,

        dloficialTOars: 25,
        dloficialTOeur: 25,
        dloficialTOeth: 25,
        dloficialTObtc: 25,
        dloficialTOSol: 25,

        eurTOars: 25,
        eurTOdlblue: 25,
        eurTOdloficial: 25,
        eurTOeth: 25,
        eurTObtc: 25,
        eurTOSol: 25,

        ethTOars: 25,
        ethTOdlblue: 25,
        ethTOdloficial: 25,
        ethTOeur: 25,
        ethTObtc: 25,
        ethTOSol: 25,

        btcTOars: 25,
        btcTOdlblue: 25,
        btcTOdloficial: 25,
        btcTOeur: 25,
        btcTOeth: 25,
        btcTOSol: 25,

        solTOars: 25,
        solTOdlblue: 25,
        solTOdloficial: 25,
        solTOeur: 25,
        solTOeth: 25,
        solTObtc: 25,
    }
    const sendPackage = (p) => {
        console.log(p)
        console.log(contador)
        setCoin(p.from)
        p.id += contador;
        var result = EQ[p.from + "TO" + p.to] * p.amount;
        p.result = result;
        setArray(current => [...current, p]);
        setContador(contador + 1);
    }

    const cambiar = ()=>{   
        setCoin("eth")
        console.log(context)
    }
    
    return(
        <Fragment>
            <div className="contenedor-convertidor Glassmorphism">
                <Header />
                <InputForm resolvePackage={sendPackage}/>
                <OutputForm />
                
                {/*Un contenedor que contenga el modelo 3d del bitcoin y el modelo 3d del ethereum*/}

                <div className="input-coin-container">
                <button onClick={cambiar}>
                    TEST CAMBIAR MODELO 
                </button>
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
                        <ModelPicker coin={coin}/>

                    </Canvas>
                </div>
                <div className="contenedor-historial Glassmorphism">
                    {array.map(conversion =>(
                    <Info 
                    key={conversion.id}
                    data={conversion}
                    >
                    </Info>
                    ))}
                </div>
            </div>

        </Fragment>
    )
}