import * as React from 'react';
import {Text, View} from "react-native";

import styles from "./style";

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
            <View style={styles.container}>
                <Text style={styles.title}>Temperature</Text>
                <Text style={styles.value}>{this.state.temperature}{this.state.unit}</Text>
            </View>
        )
    }
}

export {InfoComponent}
