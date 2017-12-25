import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import appTheme from '../assets/colors.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.primary
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: appTheme.primaryText
  }
});

const helperText = 'You haven\'t added any options yet.';

export default () => (
  <View style={styles.container}>
    <Text style={styles.welcome}>
      {helperText}
    </Text>
  </View>
);
