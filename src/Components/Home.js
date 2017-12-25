import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';
import Options from './Options';
import appTheme from '../assets/colors.json';
import Welcome from './Welcome';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      options: [{
        text: 'Pizza',
        value: 'Pizza'
      }, {
        text: 'Dosa',
        value: 'Dosa'
      }, {
        text: 'Masal Dosa',
        value: 'Masal Dosa'
      }, {
        text: 'Poori',
        value: 'Poori'
      }, {
        text: 'Burger',
        value: 'Burger'
      }, {
        text: 'Sandwich',
        value: 'Sandwich'
      }, {
        text: 'Chicken Briyani',
        value: 'Chicken Briyani'
      }, {
        text: 'Khuska',
        value: 'Khuska'
      }, {
        text: 'Samosa',
        value: 'Samosa'
      }, {
        text: 'Donut',
        value: 'Donut'
      }, {
        text: 'Truffle',
        value: 'Truffle'
      }]
    };

    this.renderContent = () => this._renderContent();
    this.onChoosing = chosenOption => this._onChoosing(chosenOption);
  }

  _onChoosing (chosenOption) {
    this.props.navigation.navigate('Choice', { selectedOption: chosenOption.text });
  }

  _renderContent () {
    const { options } = this.state;
    let content;
    if (options.length < 1) {
      content = <Welcome />;
    } else {
      content = <Options options={options} onChoosing={this.onChoosing} />;
    }
    return content;
  }

  render () {
    return (
      <View style={{ flex: 1, backgroundColor: appTheme.primary }}>
        <StatusBar
          backgroundColor={appTheme.primary}
          barStyle="light-content"
          hidden
        />
        {this.renderContent()}
        <ActionButton
          buttonColor={appTheme.secondary}
          buttonTextStyle={{ color: appTheme.secondaryText }}
          useNativeFeedback
          fixNativeFeedbackRadius
          nativeFeedbackRippleColor={appTheme.secondaryDark}
          onPress={() => this.props.navigation.navigate('Choice', { selectedOption: 'Has to be done' })}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
