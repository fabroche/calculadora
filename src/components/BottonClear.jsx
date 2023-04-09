import React from "react";
import '../styles/BottonClear.css'

const BottonClear = (props) => (
    <div
        className="botton-clear"
        onClick={props.manejarClear}
    >
        {props.children}
    </div>
)

export default BottonClear;