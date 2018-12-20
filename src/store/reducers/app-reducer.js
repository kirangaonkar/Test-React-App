const initialState = {
    age: 24
}

const appReducer = (state = initialState, action) => {

    const newState = { ...state };
    if (action.type === 'ADD_AGE') {
        newState.age += action.value;
    }
    if (action.type === 'DOWN_AGE') {
        newState.age -= action.value;
    }
    return newState;
}

export default appReducer;