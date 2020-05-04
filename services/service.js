const mockGetData = [
    {id: 1, value: 75, unit: "°F", title: "Capteur 1", color: "#e67e22", type: "temperature"},
    {id: 2, value: 21.5, unit: "°C", title: "Capteur 2", color: "#2c3e50", type: "temperature"},
    {id: 3, value: 21.5, unit: "°C", title: "Capteur 3", color: "#ecf0f1", type: "temperature"},
    {id: 4, value: 12, unit: "°F", title: "Capteur 4", color: "#7f8c8d", type: "temperature"},
    {id: 5, value: 10, unit: "%", title: "Capteur 5", color: "#00FFFF", type: "humidity"},
    {id: 6, value: 20, unit: "%", title: "Capteur 6", color: "#2c3e50", type: "humidity"},
    {id: 7, value: 50, unit: "%", title: "Capteur 7", color: "#7FFFD4", type: "humidity"},
    {id: 8, value: 80, unit: "%", title: "Capteur 8", color: "#B0C4DE", type: "humidity"},
    {id: 12, value: 128, unit: "°F", title: "Capteur 10", color: "#7f8c8d", type: "temperature"},
    {id: 28, value: 30, unit: "°C", title: "Capteur 168", color: "#ecf0f1", type: "temperature"},
    {id: 5, value: 10, unit: "%", title: "Capteur 5", color: "#00FFFF", type: "humidity"},
    {id: 6, value: 20, unit: "%", title: "Capteur 6", color: "#2c3e50", type: "humidity"},
    {id: 7, value: 50, unit: "%", title: "Capteur 7", color: "#7FFFD4", type: "humidity"},
    {id: 8, value: 80, unit: "%", title: "Capteur 8", color: "#B0C4DE", type: "humidity"},
    {id: 12, value: 128, unit: "°F", title: "Capteur 10", color: "#7f8c8d", type: "temperature"},
    {id: 28, value: 30, unit: "°C", title: "Capteur 168", color: "#ecf0f1", type: "temperature"},
];

const mockGetSensorData = {
    title: "Capteur 5",
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
    getData: () => {
        return Promise.resolve(mockGetData);
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
