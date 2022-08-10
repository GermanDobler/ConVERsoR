import { Fragment } from "react";
import "./styles/Glassmorphism.css";
export default function Header() {
    return (
        <Fragment>
                    <img src={require('./logo.png')} className="img" height={200} width={200} alt="CONVERSOR LOGO" />
        </Fragment>
    );
}