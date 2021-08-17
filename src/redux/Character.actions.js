export const CREATE_CHARACTER = 'CREATE_CHARACTER'
export const SET_CHARACTER = 'SET_CHARACTER'


export const deleteCharacterAction = (id, dispatch) => {
    return fetch('http://localhost:3000/characters', {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        dispatch(getCharacterAction)
    })
}

export const createCharacterAction = (character, dispatch) => {
    return fetch('http://localhost:3000/characters', {
        method: 'POST',
        body: JSON.stringify(character),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => {
        dispatch(getCharacterAction)
    })
}

export const getCharacterAction = (dispatch) => {
        fetch('http://localhost:3000/characters')
            .then(response => {
                return response.json()
            })
            .then(data => {
            return dispatch({
                type: SET_CHARACTER,
                payload: data.list
            })
        }).catch((error) => {
            return error
        })
    }
