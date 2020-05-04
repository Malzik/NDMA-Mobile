import {mqttApi} from "../../services/service";
import {ToastAndroid} from "react-native";

const getData = () => {
    mqttApi.get()
        .then(res => {
            dispatch({
                type: 'GET_DATA',
                res
            })
        })
        .catch(() =>
            ToastAndroid.show('Connexion au serveur impossible', ToastAndroid.LONG)
        )
};

const login = (username, password) => {
    mqttApi.login(username, password)
        .then(res => {
            dispatch({
                type: 'LOGIN',
                res
            })
        })
        .catch(() =>
            ToastAndroid.show('Identifiants invalides', ToastAndroid.LONG)
        )
};

export {
    getData,
    login
};
