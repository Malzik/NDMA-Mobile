import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {Login} from "../components/Login/LoginComponent";
import {bindActionCreators} from "redux";
import * as actions from "../store/actions/action";
import {connect} from "react-redux";

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Login navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
});
