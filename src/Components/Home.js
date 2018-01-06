import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';
import Options from './Options';
import appTheme from '../assets/colors.json';
import Welcome from './Welcome';
import AddOptionModal from './AddOptionModal';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      options: [{
        text: 'Dosa is a great thing you dont know the power of dosa',
        value: 'Dosa'
      }],
      showAddOptionModal: false,
      newOption: ''
    };

    this.renderContent = () => this._renderContent();
    this.onChoosing = chosenOption => this._onChoosing(chosenOption);
    this.showAddOption = () => this._showAddOption();
    this.closeAddOption = () => this._closeAddOption();
    this.onChangeText = text => this._onChangeText(text);
    this.addOption = () => this._addOption();
    this.onDelete = index => this._onDelete(index);
  }

  _onChoosing (chosenOption) {
    this.props.navigation.navigate('Choice', { selectedOption: chosenOption.text });
  }

  _showAddOption () {
    this.setState({
      showAddOptionModal: true
    });
  }

  _closeAddOption () {
    this.setState({
      showAddOptionModal: false
    });
  }

  _onChangeText (text) {
    this.setState({
      newOption: text
    });
  }

  _addOption () {
    const { newOption, options } = this.state;
    const newOptions = JSON.parse(JSON.stringify(options));
    newOptions.push({
      text: newOption,
      value: newOption
    });
    this.setState({
      options: newOptions,
      newOption: '',
      showAddOptionModal: false
    });
  }

  _onDelete (index) {
    const options = JSON.parse(JSON.stringify(this.state.options));
    options.splice(index, 1);
    this.setState({
      options
    });
  }

  _renderContent () {
    const { options } = this.state;
    let content;
    if (options.length < 1) {
      content = <Welcome />;
    } else {
      content = <Options options={options} onChoosing={this.onChoosing} onDelete={this.onDelete} />;
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

        <AddOptionModal
          visible={this.state.showAddOptionModal}
          onAccept={this.addOption}
          onDecline={this.closeAddOption}
          onChangeText={this.onChangeText}
          value={this.state.newOption}
        >
          Are you sure?
        </AddOptionModal>

        <ActionButton
          buttonColor={appTheme.secondary}
          buttonTextStyle={{ color: appTheme.secondaryText }}
          useNativeFeedback
          fixNativeFeedbackRadius
          nativeFeedbackRippleColor={appTheme.secondaryDark}
          onPress={this.showAddOption}
        />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object
};

export default Home;
