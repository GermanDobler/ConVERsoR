import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Input, Button } from "@mui/material";
import "./styles/Glassmorphism.css";
import "./styles/formsStyles.css";

export default function InputForm() {
    const [amount, setAmount] = useState("");
    const [inputCoin, setInputCoin] = useState("ARS");

    var result = 0;
    const handleInputCoin = (event) => {
        setInputCoin(event.target.value);
    }
    const handleInputAmount = (event) => {
        setAmount(event.target.value);
    }
    const sendPackage = () => {
        console.log(inputCoin);
        console.log(amount);
    }
    
    return(
        <div className="form-input Glassmorphism-2">
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
                        <MenuItem value={"ARS"}>Peso argentino</MenuItem>
                        <MenuItem value={"DLBLUE"}>Dolar Blue</MenuItem>
                        <MenuItem value={"DLOFICIAL"}>Dolar Oficial</MenuItem>
                        <MenuItem value={"EUR"}>Euro</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="input-amount-label">Specify amount</InputLabel>
                    <Input 
                    required={true}
                    labelId="input-amount-label"
                    id='input-amount'
                    value={amount}
                    onChange={handleInputAmount}
                    />
                </FormControl>
                <Button variant="contained" color="primary" onClick={sendPackage}/>
            </div>
            <div className="result-container">
                <p className="result-value">{result}</p>
            </div>
        </div> 
    )
}