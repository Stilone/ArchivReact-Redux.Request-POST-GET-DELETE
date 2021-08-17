import React from 'react';
import { BtnCharacterComponent } from './btn.Character.component'

export const CharacterComponent = (props) => {
    const { state, handleDeleteClick } = props


    return (
        <div>
            <ul>
                {state.map((item) => {
                    return <li key={item.name}>{item.id}.
                        name: {item.name},
                        hp: {item.hp},
                        level: {item.level},
                        className: {item.className}
                        <BtnCharacterComponent id={item.id} handleDeleteClick={handleDeleteClick}/>
                    </li>
                })}
            </ul>

        </div>
    );
};
