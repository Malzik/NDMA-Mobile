import {mqttApi} from "../../services/service";

const getData = () => {
    mqttApi
        .get()
        .then(res => {
            dispatch({
                type: 'GET_DATA',
                res
            })
        })
        .catch(() =>
                console.log("test")
            // ToastAndroid.show('Connexion au serveur impossible', ToastAndroid.LONG)
        )
};

const getSensorData = id => dispatch => {
    mqttApi
        .getSensorData(id)
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
