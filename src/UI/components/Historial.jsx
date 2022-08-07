import { Fragment, useContext, useState } from "react";
import Info from "./Info";
import context from "./Context";
import {Consumer} from "./Context";

import "./styles/Glassmorphism.css";
import { Button } from "bootstrap";

    var contador = 2;//variable contador para aumentar la pk/id
    
export default function Historial() {
    const c = useContext(context)
    const [conversiones, setConversiones] = useState(c);
    // var cantidad = 1000;//cantidad moneda
    // var de = 'ARG';//que moneda
    // var a = 'USD OFICIAL';//a otra moneda
    // var cambio = 1;//resultado
    // var conversiones = [
    //     {id:contador,cantidad:cantidad, de:de, a:a,cambio:cambio}
    // ];
    console.log(conversiones)
    return (
        <Fragment>
                <div className="contenedor-historial Glassmorphism">
                    {c.map(conversion =>(
                    <Info 
                    key={conversion.id}
                    data={conversion}
                    >
                    </Info>
                    ))}
                </div>
        </Fragment>
    );}