import React from "react";
import {InputComponent} from "./redux/Input.component";


export const CountComponent = (props) => {
    const handleClick = (newValue) => {
        props.incrementInput(newValue)
    }

    return (
        <div>
            <h1>Count</h1>
            <button onClick={props.increment}>+</button>
            <span>{props.counter}</span>
            <button onClick={props.decrement}>-</button>
            <InputComponent onClick={handleClick}/>
        </div>
    )
}