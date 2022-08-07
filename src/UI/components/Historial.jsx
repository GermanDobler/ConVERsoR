import { Fragment, useContext } from "react";
import Info from "./Info";
import context from "./Context";
import "./styles/Glassmorphism.css";
import { Button } from "bootstrap";

    var contador = 2;//variable contador para aumentar la pk/id
    
export default function Historial() {
    const contextss = useContext(context)

    // var cantidad = 1000;//cantidad moneda
    // var de = 'ARG';//que moneda
    // var a = 'USD OFICIAL';//a otra moneda
    // var cambio = 1;//resultado
    // var conversiones = [
    //     {id:contador,cantidad:cantidad, de:de, a:a,cambio:cambio}
    // ];
    
    console.log(conversiones);
    return (
        <Fragment>
                <button onClick={() => {
                    console.log(contextss)
                } }>
                    Click me
                </button>
                <div className="contenedor-historial Glassmorphism">
                {conversiones.map(conversion =>(
                <Info 
                key={conversion.id}
                data={conversion}
                >
                </Info>
                ))}
                </div>
        </Fragment>
    );}