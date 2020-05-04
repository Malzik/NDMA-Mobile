import * as React from 'react';
import {Text, View} from "react-native";

class InfoComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            temperature: this.props.temperature,
            unit: this.props.unit
        }
    }

    render() {
        return (
            <View>
                <Text>Temperature: {this.state.temperature} {this.state.unit}</Text>
            </View>
        )
    }
}

export {InfoComponent}
