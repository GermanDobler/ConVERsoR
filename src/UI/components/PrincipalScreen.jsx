import { Fragment } from "react";
import Header from "./Header";
import "./styles/Glassmorphism.css"
import Historial from "./Historial";
export default function PrincipalScreen(){
return (
    <Fragment>
        <div className="Glassmorphism contenedor">
            <Historial></Historial>
        </div>
    </Fragment>
);
}