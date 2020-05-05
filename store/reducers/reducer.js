const initialState = {
    data: [],
    token: 1, //Mettre à null si on souhaite voir la page de connexion
    sensor: null
};

const reducer = (state = initialState, action = {}) => {
    const newState = {...state};

    switch (action.type) {
        case 'GET_DATA':
            newState.data = action.res;
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
