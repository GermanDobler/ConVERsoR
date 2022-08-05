import { Fragment } from "react";
import "./styles/Glassmorphism.css";
export default function Header() {
    return (
        <Fragment>
                <div className="contenedor-header Glassmorphism">
                    <img src={require('./CONVERSOR LOGO.png')} className="img" height={150} width={700} alt="CONVERSOR LOGO" />
                </div>
        </Fragment>
    );
}