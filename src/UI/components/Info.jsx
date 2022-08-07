import { Fragment } from "react";

export default function Info(props) {
    return (
        <Fragment>
            <div>
                {props.data.id}
                {props.data.amount}
                {props.data.from}
                {props.data.to}
                {props.data.result}
            </div>
        </Fragment>
    );
}
