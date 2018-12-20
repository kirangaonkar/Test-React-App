

export const ageUp = (val) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(ageUpAsync(val));
        }, 5000);
    }
}

export const ageUpAsync = (val) => {
    return { type: 'ADD_AGE', value: val };
}


export const ageDown = (val) => {
    return { type: 'AGE_DOWN', value: val };
}