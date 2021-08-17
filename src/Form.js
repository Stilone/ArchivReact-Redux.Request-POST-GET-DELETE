import React, {useState} from "react";

export const Form = (props) => {
    const classNames = ['warrior', 'rogue', 'mage', 'warlock']
    const defaultForm = {name:'name', hp: 100, level: 1, className: 'mage'}
    const [form, newForm] = useState(defaultForm)



    const handleChange = (event) => {
        const copForm = {...form}
        copForm[event.target.name] = event.target.value
        newForm(copForm)
    }

    const handleClick = (event) => {
        const copForm = {...form}
        event.preventDefault()
        props.onClick(copForm)
        newForm(defaultForm)
    }


    const getClassName = () => {
        const getClass = (item) => {
            return <option key={item} value={item}>{item}</option>
        }
         return classNames.map(getClass)
    }

    return (
        <form>
            <label>
                <p>Enter to name:</p>
                <input value={form.name}
                       type="name"
                       name="name"
                       onChange={handleChange}
                />
            </label>

            <label>
                <p>Enter to hp:</p>
                <input value={form.hp}
                       type="number"
                       name="hp"
                       onChange={handleChange}
                />
            </label>

            <label>
                <p>Enter to level:</p>
                <input value={form.level}
                       type="number"
                       name="level"
                       onChange={handleChange}
                />
            </label>

            <label>
                <p>Select a name:</p>
                <select name="className"
                        onChange={handleChange}
                >
                    {getClassName(form.className)}
                </select>
            </label>
            <br />
            <button onClick={handleClick}>submit</button>
        </form>
    )
}