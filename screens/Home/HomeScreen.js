import * as React from 'react';
import {Text, View, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './style'

import {Home} from "../../components/Home/HomeComponent"

export default function HomeScreen() {
  return (
      <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <Home/>
          </ScrollView>
      </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

