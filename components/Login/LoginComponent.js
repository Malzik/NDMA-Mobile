import React from "react";
import {Text, View} from "react-native";
import {Button, Input} from 'react-native-elements';
import {bindActionCreators} from "redux";
import * as actions from "../../store/actions/action";
import {connect} from "react-redux";
import styles from "./style"
import {mqttApi} from "../../services/service";

class LoginComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            credentials: null,
        };
        if (this.props.reducer.token !== null) {
            this.props.navigation.navigate("Sensor")
        }
    }

    async handleSubmit() {
        this.setState({
            credentials: null
        });
        mqttApi
            .login(this.state.username, this.state.password)
            .then(() => {
                this.props.navigation.navigate("Sensor");
            })
            .catch(() => {
                    this.setState({
                        credentials: "identifiants invalides"
                    })
                }
            );
    }

    render() {
        return (
            <View style={styles.container}>
                {!!this.state.credentials && (
                    <Text style={styles.errorMessage}>{this.state.credentials}</Text>
                )}
                <Input
                    placeholder="Nom d'utilisateur"
                    onChangeText={(text) => this.setState({username: text, usernameError: null})}
                    value={this.state.username}/>

                {!!this.state.passwordError && (
                    <Text style={styles.errorMessage}>{this.state.passwordError}</Text>
                )}
                <Input
                    placeholder='Mot de passe'
                    secureTextEntry={true}
                    onChangeText={(text) => this.setState({password: text, passwordError: null})}
                    value={this.state.password}/>

                <Button
                    title="Se connecter"
                    onPress={() => {
                        if (this.state.username.trim() === "") {
                            this.setState(() => ({ usernameError: "Nom d'utlisateur requis." }));
                        } else {
                            this.setState(() => ({ usernameError: null }));
                        }
                        if (this.state.password.trim() === "") {
                            this.setState(() => ({ passwordError: "Mot de passe requis." }));
                        } else {
                            this.setState(() => ({ passwordError: null }));
                        }
                        console.log(this.state.usernameError);
                        console.log(this.state.passwordError);
                        if(this.state.usernameError === null && this.state.passwordError === null){
                            this.handleSubmit()
                        }
                    }}/>
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
