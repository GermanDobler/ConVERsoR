import { Fragment, useState, useContext, useEffect } from "react";
import "./styles/Glassmorphism.css";
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";
import Header from "./Header";
import Context from "./Context";
import Grid from '@mui/material/Grid';
import Info from "./Info";

export default function Converter() {

    const [array, setArray] = useState([]); //Estado de las conversiones
    const [coin, setCoin] = useState(""); //Estado de la moneda de entrada
    const [result, setResult] = useState(""); //Estado del resultado de la conversion
    const [contador, setContador] = useState("");
    const [scrollbar, setScrollbar] = useState(false);
    const [actualPackage, setActualPackage] = useState("");
    const EQ = {

        arsTOdlblue: 0.003,
        arsTOdloficial: 0.0075,
        arsTOeur: 0.0074,
        arsTOeth:  0.0000045,
        arsTObtc: 0.000000325,
        arsTOsol: 0.000185,

        dlblueTOars: 292.00,
        dlblueTOeur: 8,
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
    useEffect(() => {
        if (array.length > 7) {
            setScrollbar(true)
            console.log("SIIII")
        }
        else if (array.length < 7) {
            setScrollbar(false)
            console.log("NOOOOOOOOOOOOOOOOO");
        }
    }, [array])
    const sendPackage = (p) => {
        console.log(p)
        setCoin(p.to)
        var result = EQ[p.from + "TO" + p.to] * p.amount;
        p.result = result;
        setResult(result);
        setArray(current => [p, ...current]);
        setActualPackage(p)
        setContador(contador + 1);
    }
    const coinChanged = (p) => {
        setCoin(p)
    }

    // for (var i = 0; i < array.length; i++) {
    //     if (array[i] == array[7]) {
    //         setScrollbar(true);
    //     }
    // }

    return (
        <Fragment>
            <div className="contenedor-convertidor Glassmorphism">
                    <Header />
                    <InputForm resolvePackage={sendPackage} onOutputCoinChanged={coinChanged} />
                    <OutputForm coinState={coin} result={result} data={actualPackage} />
            </div>
            <div className="contenedor-historial">
                {array.map(conversion => (
                    <Info
                        key={conversion.id}
                        data={conversion}
                    >
                    </Info>
                ))}
            </div>

        </Fragment>
    )
}