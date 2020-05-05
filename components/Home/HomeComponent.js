import React from "react";
import {Text, View} from "react-native";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";

import styles from "./style"

import {Temperature} from "../Temperature/TemperatureComponent";
import {Humidity} from "../Humidity/HumidityComponent";
import {FlatGrid} from "react-native-super-grid";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: this.props.data.filter(sensor => sensor.type === "temperature"),
            humidity: this.props.data.filter(sensor => sensor.type === "humidity"),
            navigation: props.navigation
        }
    }

    flatGrid(name, valeurs){
        return(
            <View>
                <Text style={styles.sectionHeader}>{name}</Text>
                <FlatGrid
                    itemDimension={100}
                    items={valeurs}
                    renderItem={({item}) => (
                        (item.type === "temperature"
                                ? <Temperature value={item.value} title={item.title} color={item.color}
                                               unit={item.unit} navigation={this.state.navigation}/>
                                : <Humidity value={item.value} title={item.title} color={item.color}
                                            unit={item.unit} navigation={this.state.navigation}/>
                        )
                    )}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.flatGrid("Température", this.state.temperature)}
                {this.flatGrid("Humidité", this.state.humidity)}
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
