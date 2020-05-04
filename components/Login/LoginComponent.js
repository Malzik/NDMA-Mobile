import React from "react";
import {View} from "react-native";
import {Button, Input} from 'react-native-elements';
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";
import {connect} from "react-redux";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    async handleSubmit() {
        await this.props.login(this.state.username, this.state.password);

        if (this.props.reducer.token !== null) {
            this.props.navigation.navigate("Home");
        }
        // ToastAndroid.show(this.props.action.token, ToastAndroid.LONG);
    }

    render() {
        return (
            <View>
                <Input
                    placeholder="Nom d'utilisateur"
                    onChangeText={(text) => this.setState({username: text})}
                    value={this.state.username}/>
                <Input
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text})}
                    value={this.state.password}/>
                <Button
                    title="Se connecter"
                    onPress={() => this.handleSubmit()}/>
            </View>
        );
    }
}

LoginComponent.propTypes = {};

const mapStateToProps = (state) => {
    return state
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({...actions}, dispatch);

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginComponent);

export {Login, LoginComponent};
