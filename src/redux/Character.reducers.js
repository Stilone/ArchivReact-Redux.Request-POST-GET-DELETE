import { CREATE_CHARACTER } from './Character.actions'
import { SET_CHARACTER } from './Character.actions'

export const CharacterReducer = (state = { list: []}, action) => {
    switch (action.type) {

        case CREATE_CHARACTER:
            const list = state.list.concat([action.payload])
            return {...state, list: list }
        case SET_CHARACTER:
            return {...state, list: action.payload}
        default:
            return {...state}
    }
}
