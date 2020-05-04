const mockGetData = {};

const mockGetSensorData = {
    temperature: 19,
    unit: "°C",
    data: {
        labels: ['10h', '11h', '12h', '13h', '14h', '15h'],
        datasets: [{
            data: [14, 15, 18, 22, 25, 19]
        }]
    }
};

const mockLogin = {
    token: "123"
};

const mqttApi = {
    get: () => {
        new Promise((resolve, reject) => {
            resolve(mockGetData)
        })
    },
    getSensorData: id => {
        return Promise.resolve(mockGetSensorData);
        new Promise((resolve, reject) => {
            resolve(mockGetData)
        })
    },
    login: (username, password) => {
        return Promise.resolve(mockLogin);
        new Promise((resolve, reject) => {
            resolve(mockLogin)
        })
    }
};

export {mqttApi};
