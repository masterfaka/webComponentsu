import React from 'react';
import './InputText.css';

function InputText(props) {
    return (
        <div className='InputText'>
            <span>{props.label}:</span>
            <input type={props.type} onChange={props.changed} id={props.id}></input>
        </div>
    )
}

export default InputText;