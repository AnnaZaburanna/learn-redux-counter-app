const counterReducer = (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'CHANGE_COUNT':
            return state + action.payload
        case 'RESET':
            return (state = 0)
        default:
            return state
    }
}
export default counterReducer;
