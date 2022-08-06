import { Fragment } from "react";
import Header from "./Header";
import Converter from "./Converter";
import Historial from "./Historial";
import "./styles/Glassmorphism.css";


export default function PrincipalScreen() {
return (
    <Fragment>
        <div className="contenedor">
            <Converter></Converter>
            <Historial></Historial>
        </div>
    </Fragment>
);}
