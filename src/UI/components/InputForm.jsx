import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Input, Button } from "@mui/material";
import "./styles/Glassmorphism.css";
import "./styles/formsStyles.css";

export default function InputForm(props) {
    const [amount, setAmount] = useState("");
    const [inputCoin, setInputCoin] = useState("ARS");
    const [inputCoin2, setInputCoin2] = useState("ARS");

    const handleInputCoin = (event) => {
        setInputCoin(event.target.value);
    }
    const handleInputCoin2 = (event) => {
        setInputCoin2(event.target.value);
    }

    const handleInputAmount = (event) => {
        setAmount(event.target.value);
    }

    const sendPackage = () => {
        /*var paquete = {
            from: inputCoin,
            to: inputCoin2,
            amount: amount,
        }*/

    }
    
    return(
        <div className="form-input Glassmorphism-2">
            <p className="header-text">INPUT A COIN</p>
            {/*Formulario de moneda de entrada y cantidad*/}
            <div>

                <FormControl>
                    <InputLabel id="input-select-label">FROM</InputLabel>
                    <Select
                        labelId="input-select-label"
                        id="input-select"
                        value={inputCoin}
                        label="Select Coin"
                        onChange={handleInputCoin}
                    >
                        <MenuItem value={"ARS"}>Peso argentino</MenuItem>
                        <MenuItem value={"DLBLUE"}>Dolar Blue</MenuItem>
                        <MenuItem value={"DLOFICIAL"}>Dolar Oficial</MenuItem>
                        <MenuItem value={"EUR"}>Euro</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel id="input-select-label-2">TO</InputLabel>
                    <Select
                        labelId="input-select-label-2"
                        id="input-select-2"
                        value={inputCoin2}
                        label="Select Coin"
                        onChange={handleInputCoin2}
                    >
                        <MenuItem value={"ARS"}>Peso argentino</MenuItem>
                        <MenuItem value={"DLBLUE"}>Dolar Blue</MenuItem>
                        <MenuItem value={"DLOFICIAL"}>Dolar Oficial</MenuItem>
                        <MenuItem value={"EUR"}>Euro</MenuItem>
                    </Select>
                </FormControl>

                <FormControl>
                    <InputLabel id="input-amount-label">Cantidad</InputLabel>
                    <Input 
                    required={true}
                    labelId="input-amount-label"
                    id='input-amount'
                    value={amount}
                    onChange={handleInputAmount}
                    />
                </FormControl>
                <Button variant="contained" color="primary" >
                    Convertir
                </Button>
            </div>

            <div>

            </div>

        </div> 
    )
}