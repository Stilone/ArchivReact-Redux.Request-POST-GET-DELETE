import React, {useEffect} from "react";
import {Form} from "./Form";
import {CharacterComponent} from "./Character.component";




export const HomeComponent = (props) => {
    const { onGetCharacter, onCreateCharacter, state, onDeleteCharacter } = props
    const handleClick = (form) => {
        onCreateCharacter(form)
    }

    const handleDeleteClick = (id) => {
        onDeleteCharacter(id)
    }



    useEffect(() => {
        onGetCharacter()
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <Form onClick={handleClick}/>
            <CharacterComponent state={state} handleDeleteClick={handleDeleteClick}/>
        </div>
    )
}