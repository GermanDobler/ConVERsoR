import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Input, Button } from "@mui/material";
import "./styles/Glassmorphism.css";
import "./styles/formsStyles.css";


import { Canvas } from '@react-three/fiber' //Importo el componente Canvas de RTF
import { BitcoinModel } from "./BitcoinModel"; //Importo el modelo 3d del bitcoin de su propio componente
import { EthereumModel } from "./EthereumModel"; //Lo mismo con la moneda de ETH
import { SolanaModel} from './SolanaModel.jsx';
import { EuroModel } from "./EuroModel";
import { DolarModel } from "./DolarModel";
import { ArsModel } from "./ArsModel";

export default function InputForm(props) {
    const [amount, setAmount] = useState("");
    const [inputCoin, setInputCoin] = useState("");
    const [inputCoin2, setInputCoin2] = useState("");
    const [contador,setContador] = useState(0);
    const handleInputCoin = (event) => {
        setInputCoin(event.target.value);
    }
    const handleInputCoin2 = (event) => {
        setInputCoin2(event.target.value);
        props.onOutputCoinChanged(event.target.value);
    }

    const handleInputAmount = (event) => {
        setAmount(event.target.value);
    }


    const buildAndSendPackage = () => {
        var paquete = {
            id: contador,
            from: inputCoin,
            to: inputCoin2,
            amount: amount,
        }
        props.resolvePackage(paquete);
        setContador(contador+1)
        setAmount("");
    }

    return(
        <div className="form-input Glassmorphism-2">

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
                    {inputCoin === "btc" ? <BitcoinModel pos={[0, 0, 0]}/> : null}
                    {inputCoin === "eth" ? <EthereumModel pos={[0, 0, 0]}/> : null}
                    {inputCoin === "sol" ? <SolanaModel  pos={[0, 0, 0]}/> : null}
                    {inputCoin === "ars" ? <ArsModel pos={[0, 0, 0]}/> : null}
                    {inputCoin === "eur" ? <EuroModel pos={[0, 0, 0]}/> : null}
                    {inputCoin === "dlblue" ? <DolarModel pos={[0, 0, 0]}/> : null}
                    {inputCoin === "dloficial" ? <DolarModel pos={[0, 0, 0]}/> : null}
                </Canvas> 
            </div>
            
            <div className="data-form">
                <FormControl required="required">
                    <InputLabel id="input-select-label-required-label">FROM</InputLabel>
                    <Select
                        required="true"
                        labelId="input-select-label-required-label"
                        id="input-select"
                        value={inputCoin}
                        label="Select Coin"
                        onChange={handleInputCoin}
                        className={"coin-select"}
                    >
                        <MenuItem value={"ars"}>Peso argentino</MenuItem>
                        <MenuItem value={"dlblue"}>Dolar Blue</MenuItem>
                        <MenuItem value={"dloficial"}>Dolar Oficial</MenuItem>
                        <MenuItem value={"eur"}>Euro</MenuItem>
                        <MenuItem value={"btc"}>Bitcoin</MenuItem>
                        <MenuItem value={"eth"}>Ethereum</MenuItem>
                        <MenuItem value={"sol"}>Solana</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel id="input-select-label-2-required-label">TO</InputLabel>
                    <Select
                        labelId="input-select-label-2-required-label"
                        id="input-select-2"
                        value={inputCoin2}
                        label="Select Coin"
                        onChange={handleInputCoin2}
                        className={"coin-select"}
                    >
                        <MenuItem value={"ars"}>Peso argentino</MenuItem>
                        <MenuItem value={"dlblue"}>Dolar Blue</MenuItem>
                        <MenuItem value={"dloficial"}>Dolar Oficial</MenuItem>
                        <MenuItem value={"eur"}>Euro</MenuItem>
                        <MenuItem value={"btc"}>Bitcoin</MenuItem>
                        <MenuItem value={"eth"}>Ethereum</MenuItem>
                        <MenuItem value={"sol"}>Solana</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel id="input-amount-label">Cantidad</InputLabel>
                    <Input 
                    required={true}
                    type="number"
                    labelId="input-amount-label"
                    id='input-amount'
                    value={amount}
                    onChange={handleInputAmount}
                    className={"send"}
                    />
                </FormControl>
                <Button className={"send send-button"} variant="contained" color="primary" onClick={buildAndSendPackage}>
                    Convertir
                </Button>
            </div>
            
        </div> 
    )
}