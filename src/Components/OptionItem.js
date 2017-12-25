import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import appTheme from '../assets/colors.json';

const styles = StyleSheet.create({
  viewStyle: {
    minWidth: '100%',
    minHeight: 40,
    borderWidth: 2,
    padding: 15,
    borderColor: 'transparent',
    borderRadius: 10,
    backgroundColor: appTheme.primaryLight
  },
  textStyle: {
    fontSize: 18,
    color: appTheme.primaryText
  }
});

class OptionItem extends React.Component {
  render () {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

OptionItem.propTypes = {
  text: PropTypes.string,
  // value: PropTypes.string,
  // onDelete: PropTypes.func
};

export default OptionItem;
