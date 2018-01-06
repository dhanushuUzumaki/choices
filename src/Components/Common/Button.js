import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import PropTypes from 'prop-types';
import appTheme from '../../assets/colors.json';

const styles = {
  buttonStyle: {
    alignSelf: 'center',
    width: '50%',
    backgroundColor: appTheme.secondary,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: appTheme.secondaryLight,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textStyle: {
    alignSelf: 'center',
    color: appTheme.secondaryText,
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

const Button = (props) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableNativeFeedback
      onPress={props.onPress}
      background={TouchableNativeFeedback.SelectableBackground()}
    >
      <View style={buttonStyle}>
        <Text style={textStyle}>
          {props.children}
        </Text>
      </View>
    </TouchableNativeFeedback>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func
};

export default Button;
