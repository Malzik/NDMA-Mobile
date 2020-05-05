import {mqttApi} from "../../services/service";

const getData = () => async dispatch => {
    return mqttApi
        .getData()
        .then(res => {
            dispatch({
                type: 'GET_DATA',
                res
            })
        })
        .catch(err => {
            console.log(err)
            // ToastAndroid.show('Connexion au serveur impossible', ToastAndroid.LONG)
        })
};

const getSensorData = name => dispatch => {
    return mqttApi
        .getSensorData(name)
        .then(res => {
            dispatch({
                type: 'GET_SENSOR_DATA',
                res
            })
        })
        .catch((err) =>
                console.log(err)
            // ToastAndroid.show('Connexion au serveur impossible', ToastAndroid.LONG)
        )
};

const login = (username, password) => dispatch => {
    mqttApi
        .login(username, password)
        .then(res => {
            dispatch({
                type: 'LOGIN',
                res
            })
        })
        .catch((err) =>
                console.log(err)
            // ToastAndroid.show('Identifiants invalides', ToastAndroid.LONG)
        )
};

export {
    getData,
    getSensorData,
    login
};
