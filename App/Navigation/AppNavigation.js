import { createStackNavigator, createAppContainer } from 'react-navigation'
import ScreenExample from '../Screens/ScreenExample'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = createStackNavigator({
  ScreenExample: { screen: ScreenExample }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'ScreenExample',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default createAppContainer(PrimaryNav)
