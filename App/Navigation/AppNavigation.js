import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import ScreenExample from '../Screens/ScreenExample'
import SplashScreen from 'react-native-splash-screen';
import configureStore from "../Redux/configureStore"
import styles from './Styles/NavigationStyles'
import { Provider } from "react-redux";

const store = configureStore();

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ScreenExample: { screen: ScreenExample } , 
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScreenExample',
  navigationOptions: {
    headerStyle: styles.header
  }
})

let Navigation = createAppContainer(PrimaryNav) 

export default class App extends Component {
  componentDidMount(){
    SplashScreen.hide()
  }
  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    );
  }
}
