import { StackNavigator } from 'react-navigation';
import Home from './Components/Home';
import Choice from './Components/Choice';
import appTheme from './assets/colors.json';

const navigationOptions = {
  title: 'Choices',
  headerStyle: { backgroundColor: appTheme.primary },
  headerTitleStyle: { color: appTheme.primaryText, textAlign: 'center', alignSelf: 'center' }
};

export default StackNavigator({
  Home: {
    screen: Home,
    navigationOptions
  },
  Choice: {
    screen: Choice,
    navigationOptions: { ...navigationOptions, headerLeft: null }
  }
});
