const initialState = {
    data: null,
    token: null,
    sensor: null
};

const reducer = (state = initialState, action = {}) => {
    const newState = {...state};

    switch (action.type) {
        case 'GET_DATA':
            newState.data = action.data;
            break;
        case 'GET_SENSOR_DATA':
            newState.sensor = action.res;
            break;
        case 'LOGIN':
            newState.token = action.res.token;
            break;
        default:
            break;
    }

    return newState;
};

export {reducer};
