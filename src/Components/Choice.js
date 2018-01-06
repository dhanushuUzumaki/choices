import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import appTheme from '../assets/colors.json';
import { Button } from './Common';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appTheme.primary
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: appTheme.primaryText
  },
  optionStyle: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
    color: appTheme.secondary
  }
});

class Choice extends Component {

  constructor (props) {
    super(props);
    this.onButtonPress = () => this._onButtonPress();
  }

  _onButtonPress () {
    this.props.navigation.goBack();
  }

  render () {
    const { container, textStyle, optionStyle } = styles;
    const { selectedOption } = this.props.navigation.state.params;
    const helperText = 'Shuffle and Random made this selection B)';
    return (
      <View style={container}>
        <Text style={textStyle}>
          {helperText}
        </Text>
        <Text style={optionStyle}>
          {selectedOption}
        </Text>
        <Button
          onPress={this.onButtonPress}
        >
          Back
        </Button>
      </View>
    );
  }
}

Choice.propTypes = {
  navigation: PropTypes.object
};

export default Choice;
