import { Fragment } from "react";

export default function Info(props) {
    return (
        <Fragment>
            <div>
                {props.data.contador}
                {props.data.cantidad}
                {props.data.a}
                {props.data.de}
                {props.data.cambio}
            </div>
        </Fragment>
    );
}
