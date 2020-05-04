import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";

import styles from "./style"

import {Temperature} from "../Temperature/TemperatureComponent";
import {Humidite, Humidity} from "../Humidity/HumidityComponent";
import {FlatGrid} from "react-native-super-grid";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.sectionHeader}>Température</Text>
                <FlatGrid
                    itemDimension={100}
                    items={[
                        {value: 75, unit: "°F", title: "Capteur 1", color: "#e67e22"},
                        {value: 21.5, unit: "°C", title: "Capteur 1", color: "#2c3e50"},
                        {value: 21.5, unit: "°C", title: "Capteur 1", color: "#ecf0f1"},
                        {value: 12, unit: "°F", title: "Capteur 1", color: "#7f8c8d"},
                        ]}
                    renderItem={({ item }) => (<Temperature value={item.value} title={item.title} color={item.color} unit={item.unit}/>)}
                />
                <Text style={styles.sectionHeader}>Humidite</Text>
                <FlatGrid
                    itemDimension={100}
                    items={[
                        {value: 10, unit: "%", title: "Capteur 1", color: "#e67e22"},
                        {value: 20, unit: "%", title: "Capteur 1", color: "#2c3e50"},
                        {value: 50, unit: "%", title: "Capteur 1", color: "#ecf0f1"},
                        {value: 80, unit: "%", title: "Capteur 1", color: "#7f8c8d"},
                    ]}
                    renderItem={({ item }) => (<Humidity value={item.value} title={item.title} color={item.color} unit={item.unit}/>)}
                />
            </View>
        )
    }
}

HomeComponent.propTypes = {};
const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions}, dispatch);

const Home = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeComponent);

export {Home, HomeComponent};
