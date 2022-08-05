import { Fragment } from "react";
import Info from "./Info";
import "./styles/Glassmorphism.css";

    var contador = 2;//variable contador para aumentar la pk/id
    
export default function Historial() {
    var cantidad = 1000;//cantidad moneda
    var de = 'ARG';//que moneda
    var a = 'USD OFICIAL';//a otra moneda
    var cambio = 1;//resultado
    var conversiones = [
        {id:contador,cantidad:cantidad, de:de, a:a,cambio:cambio}
    ];
    console.log(conversiones);
    return (
        <Fragment>
                <div className="contenedor-historial">
                {conversiones.map(conversion =>(
                <Info 
                key={conversion.id}
                data={conversion}
                >
                </Info>
                ))}
                </div>
        </Fragment>
    );
    console.log(conversiones.map);
}