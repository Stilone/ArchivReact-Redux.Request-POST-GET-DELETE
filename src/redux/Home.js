import { connect } from 'react-redux'
import { HomeComponent } from '../Home.component'
import { createCharacterAction, getCharacterAction, deleteCharacterAction } from './Character.actions'


const mapStateToProps = (state) => {

    return { state: state.character.list }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onGetCharacter: () => {
            getCharacterAction(dispatch)
        },
        onDeleteCharacter: (id) => {
            deleteCharacterAction(id,dispatch)
        },
        onCreateCharacter: (value) => {
             createCharacterAction(value, dispatch)
            }
    }
}

export const Home = connect(mapStateToProps, mapDispatchToProps)(HomeComponent)
