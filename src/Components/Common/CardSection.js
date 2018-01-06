import React from 'react';
import { View } from 'react-native';
import appTheme from '../../assets/colors.json';

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: appTheme.primary,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: appTheme.primary,
    position: 'relative'
  }
};

/* eslint-disable react/prop-types */

const CardSection = props => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

export default CardSection;
