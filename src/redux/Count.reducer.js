export const CountReducer = (state = { counter: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1}

        case 'DECREMENT':
            return { counter: state.counter - 1}

        case 'INCREMENT_INPUT':
            return { counter: state.counter + Number(action.payload) }

        default:
            return {...state}
    }
}