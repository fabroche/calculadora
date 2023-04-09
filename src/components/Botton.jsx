import React from "react";
import '../styles/Boton.css'

function Botton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=');
    };

    return (
        <div
            className={
                `botton-contenedor 
                ${esOperador(props.children)
                        ? 'operador'
                        : ''
                    }`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Botton;