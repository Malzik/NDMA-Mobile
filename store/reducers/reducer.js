const initialState = {
    data: null,
    token: null
};

const reducer = (state = initialState, action = {}) => {
    const newState = {...state};

    switch (action.type) {
        case 'GET_DATA':
            newState.data = action.data;
            break;
        case 'LOGIN':
            newState.token = action.token;
            break;
        default:
            break;
    }

    return newState;
};

export {reducer};
