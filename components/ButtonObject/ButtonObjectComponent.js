import * as React from 'react-native';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from "./style"

export default function ButtonObjectComponnent(props) {
    return (
        <TouchableHighlight style={styles.button}><Text>{props.title}</Text></TouchableHighlight>
    );
}
