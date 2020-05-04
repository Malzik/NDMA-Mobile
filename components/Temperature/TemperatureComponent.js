import React from 'react';
import {Text, View, TouchableHighlight, Image} from 'react-native';
import styles from "./style"
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";

import temperature from "../../assets/images/temperature.png"
import {connect} from "react-redux";

class TemperatureComponnent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            value: props.value,
            color: props.color,
            unit: props.unit,
        };
    }

    render(){
        return (
            <TouchableHighlight onPress={()=>alert("Erreur")}>
                <View style={[styles.itemContainer, { backgroundColor: this.state.color}]}>
                    <Image source={temperature} style={styles.image}/>
                    <Text style={styles.itemValue}>{this.state.value} {this.state.unit}</Text>
                    <Text style={styles.itemName}>{this.state.title}</Text>
                </View>
            </TouchableHighlight>

        )
    }
}

TemperatureComponnent.propTypes = {};
const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions}, dispatch);

const Temperature = connect(
    mapStateToProps,
    mapDispatchToProps
)(TemperatureComponnent);

export {Temperature, TemperatureComponnent};

