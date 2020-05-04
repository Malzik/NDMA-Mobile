import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import styles from "./style"

import {LoginComponent} from "../../components/Login/LoginComponent";


export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <LoginComponent/>
            </ScrollView>
        </View>
    );
}

