import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import "./styles/Glassmorphism.css";
import "./styles/formsStyles.css";

export default function InputForm() {
    var inputCoin = 0;
    var result = 0;
    const handleInputCoin = () => {
        console.log("handleInputCoin");
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
    )
}