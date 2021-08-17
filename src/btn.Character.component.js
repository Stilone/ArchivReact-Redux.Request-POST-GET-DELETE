import React from 'react';

export const BtnCharacterComponent = (props) => {

    const handleClick = (id) => {
        const arrayId = {
            id: id
        }
        props.handleDeleteClick(arrayId)
    }


    return (
        <button onClick={() => {handleClick(props.id)}}>delete</button>
    );
};

