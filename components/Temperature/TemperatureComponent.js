import React from 'react';
import {Image, Text, TouchableHighlight, View} from 'react-native';
import styles from "./style"
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";

import temperature from "../../assets/images/temperature.png"
import {connect} from "react-redux";

class TemperatureComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            value: props.value,
            color: props.color,
            unit: props.unit,
            navigation: props.navigation
        };
    }

    render(){
        return (
            <TouchableHighlight onPress={() => this.state.navigation.navigate("Info", {
                title: this.state.title
            })}>
                <View style={[styles.itemContainer, {backgroundColor: this.state.color}]}>
                    <Image source={temperature} style={styles.image}/>
                    <Text style={styles.itemValue}>{this.state.value} {this.state.unit}</Text>
                    <Text style={styles.itemName}>{this.state.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }
}

TemperatureComponent.propTypes = {};
const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions}, dispatch);

const Temperature = connect(
    mapStateToProps,
    mapDispatchToProps
)(TemperatureComponent);

export {Temperature, TemperatureComponent};

