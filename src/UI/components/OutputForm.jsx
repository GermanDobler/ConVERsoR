import { useState } from "react";

import "./styles/Glassmorphism.css";
import "./styles/formsStyles.css";

export default function OutputForm(props) {

    return(
        <div className="form-output Glassmorphism-2">
            {props.data}
        </div>
    )
}