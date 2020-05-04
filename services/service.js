const mockGetData = {};

const mockLogin = {
    "token": "123"
};

const mqttApi = {
    get: () =>
        new Promise((resolve, reject) => {
            resolve(mockGetData)
        }),
    login(username, password) {
        new Promise((resolve, reject) => {
            resolve(mockLogin)
        })
    }
};

export {mqttApi};
