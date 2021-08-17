import { connect } from 'react-redux'
import { CountComponent } from './Count.component'


const mapStateToProps = (state) => {
    return { counter: state.count.counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: 'INCREMENT'}),
        decrement: () => dispatch({ type: 'DECREMENT'}),
        incrementInput: (value) => dispatch({ type: 'INCREMENT_INPUT', payload: value}),
        reset: () => dispatch({ type: 'RESET'}),
    }
}

export const Count = connect(mapStateToProps, mapDispatchToProps)(CountComponent)

