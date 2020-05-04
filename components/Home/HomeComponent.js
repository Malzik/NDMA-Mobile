import React from "react";
import {View, Text} from "react-native";
import {connect} from "react-redux";

import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";

import styles from "./style"

import {Temperature} from "../Temperature/TemperatureComponent";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Temperature value={21.5} title={"Capteur 1"}/>
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
