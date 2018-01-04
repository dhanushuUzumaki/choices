import React from 'react';
import { View, Modal } from 'react-native';
import { Button, CardSection, Input } from './Common';
import appTheme from '../assets/colors.json';

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: appTheme.primary,
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

/* eslint-disable react/prop-types */

const Confirm = ({ onAccept, onDecline, visible, onChangeText, value }) => {
  const { containerStyle } = styles;
  return (
    <Modal
      animationType="slide"
      onRequestClose={() => {}}
      visible={visible}
    >
      <View style={containerStyle}>
        <CardSection>
          <Input
            placeholder="Option"
            onChangeText={onChangeText}
            value={value}
          />
        </CardSection>
        <Button onPress={onAccept}>Add</Button>
        <Button onPress={onDecline}>Cancel</Button>
      </View>
    </Modal>
  );
};

export default Confirm;
