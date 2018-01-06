import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';
import appTheme from '../assets/colors.json';

const styles = StyleSheet.create({
  outerViewStyle: {
    borderColor: 'transparent',
    borderRadius: 10,
    backgroundColor: appTheme.primaryLight,
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5
  },
  innerViewStyle: {
    minWidth: '78%',
    width: '95%',
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
  },
  deleteButtonStyle: {
    backgroundColor: appTheme.secondary,
    height: 20,
    width: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50
  },
  deleteButtonTextStyle: {
    fontSize: 12,
    color: appTheme.secondaryText,
    textAlign: 'center',
    bottom: 1
  }
});

class OptionItem extends React.Component {

  constructor (props) {
    super(props);
    this.delete = () => this._delete();
  }

  _delete () {
    this.props.onDelete(this.props.id);
  }

  render () {
    return (
      <View style={styles.outerViewStyle}>
        <View style={styles.innerViewStyle}>
          <Text style={styles.textStyle}>
            {this.props.text}
          </Text>
        </View>
        <TouchableNativeFeedback
          onPress={this.delete}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <View style={styles.deleteButtonStyle}>
            <Text style={styles.deleteButtonTextStyle}>x</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

OptionItem.propTypes = {
  text: PropTypes.string,
  onDelete: PropTypes.func,
  id: PropTypes.number
};

export default OptionItem;
