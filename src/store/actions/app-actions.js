

export const ageUp = (val) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(ageUpAsync(val));
        }, 500);
    }
}

export const ageUpAsync = (val) => {
    return { type: 'ADD_AGE', value: val };
}

export const ageDown = (val) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(ageDownAsync(val));
        }, 500);
    }
}
export const ageDownAsync = (val) => {
    return { type: 'ADD_DOWN', value: val };
}