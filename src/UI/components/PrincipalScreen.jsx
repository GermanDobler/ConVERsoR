import { Fragment } from "react";
import Header from "./Header";
import Converter from "./Converter";
import Historial from "./Historial";
import "./styles/Glassmorphism.css";
import { Provider } from "./Context";


export default function PrincipalScreen() {
    var conversions = []
    return (
    <Fragment>
        <Provider value={conversions}>
            <div className="contenedor">
                <Converter></Converter>
                <Historial></Historial>
            </div>
        </Provider>
    </Fragment>
);}
