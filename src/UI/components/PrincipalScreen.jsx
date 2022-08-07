import { Fragment } from "react";
import Header from "./Header";
import Converter from "./Converter";
import Historial from "./Historial";
import "./styles/Glassmorphism.css";
import { Provider } from "./Context";


export default function PrincipalScreen() {
    var conversions = [{id: 1, amount: 1000, from: "ARG", to: "USD OFICIAL", result: 1}];
    return (
    <Fragment>
        <Provider value={conversions}>
            <div className="contenedor">
                <Converter></Converter>
            </div>
        </Provider>
    </Fragment>
);}
