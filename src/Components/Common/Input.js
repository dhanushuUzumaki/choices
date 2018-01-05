import React from 'react';
import { TextInput, View } from 'react-native';
import appTheme from '../../assets/colors.json';

const styles = {
  inputStyle: {
    color: appTheme.primaryText,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 22,
    lineHeight: 26,
    alignSelf: 'center',
    flex: 0.8
  },
  viewStyle: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }
};

/* eslint-disable react/prop-types */

const Input = ({ value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <TextInput
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

export default Input;
