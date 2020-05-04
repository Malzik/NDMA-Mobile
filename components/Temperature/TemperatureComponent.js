import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from "./style"
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class TemperatureComponnent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: null,
            value: null
        };
    }

    render(){
        return (
            <TouchableHighlight style={styles.button}>
                <Text>{this.state.title}</Text>
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

