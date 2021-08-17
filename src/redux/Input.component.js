import React, {useState} from "react";

export const InputComponent = (props) => {
    const [value, setValue] = useState(0)

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleClick = () => {
        props.onClick(value)
    }


    return (
        <div>
            <input onChange={handleChange} value={value} type="number"/>
            <br />
            <button onClick={handleClick}>прибавить</button>
        </div>
    )
}