import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import appTheme from '../assets/colors.json';

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
  render () {
    const { container, textStyle, optionStyle } = styles;
    const { selectedOption } = this.props.navigation.state.params;
    const helperText = 'The Enterprise has chosen this for you';
    return (
      <View style={container}>
        <Text style={textStyle}>
          {helperText}
        </Text>
        <Text style={optionStyle}>
          {selectedOption}
        </Text>
      </View>
    );
  }
}

Choice.propTypes = {
  navigation: PropTypes.object
};

export default Choice;
