import { Fragment } from "react";
import "./styles/converter.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
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
            <div className="converter-container">
                <p className="header-text">Convertir {m1} a {m2}</p>
                <div className="input-container">
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
        </Fragment>
    )
}