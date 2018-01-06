import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import OptionItem from './OptionItem';
import appTheme from '../assets/colors.json';
import { Button } from './Common';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    paddingTop: 5,
    backgroundColor: appTheme.primary,
    alignItems: 'center'
  }
});

class Options extends React.Component {
  constructor (props) {
    super(props);
    this.renderOptions = () => this._renderOptions();
    this.renderButton = () => this._renderButton();
    this.onButtonPress = () => this._onButtonPress();
  }

  _onButtonPress () {
    const { options } = this.props;
    const shuffledOptions = _.shuffle(options);
    const len = shuffledOptions.length;
    const chosenOption = _.random(len - 1);
    this.props.onChoosing(shuffledOptions[chosenOption]);
  }

  _renderOptions () {
    const { options } = this.props;
    return (
      <ScrollView style={{ maxHeight: '89%' }}>
        <View style={styles.container}>
          {
            (() => options.map((option, index) => <OptionItem {...option} key={option.value} id={index} onDelete={this.props.onDelete} />))()
          }
        </View>
      </ScrollView>
    );
  }

  _renderButton () {
    const { options } = this.props;
    let content;
    if (options.length > 1) {
      content = <Button onPress={this.onButtonPress}>Choose One</Button>;
    } else {
      content = <View />;
    }
    return content;
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderOptions()}
        {this.renderButton()}
      </View>
    );
  }
}

Options.propTypes = {
  options: PropTypes.array,
  onChoosing: PropTypes.func,
  onDelete: PropTypes.func
};

export default Options;
