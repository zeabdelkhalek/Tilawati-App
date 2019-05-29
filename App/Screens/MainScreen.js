
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import { HomeScreen, SearchScreen, NotificationsScreen, SettingsScreen } from '.';

const MainScreen = createMaterialBottomTabNavigator({
	Home: {
		screen : HomeScreen , 
	},
	Settings: SettingsScreen,
	Notifications: NotificationsScreen,
	Search: SearchScreen
});

export default MainScreen;
