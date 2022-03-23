export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export const changeCount = (number) => {
    return {
        type: 'CHANGE_COUNT',
        payload: number
    }
}
