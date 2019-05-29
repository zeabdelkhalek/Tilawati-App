import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Colors } from '../Themes';
import { HomeScreen, SearchScreen, NotificationsScreen, SettingsScreen } from '.';
import { IconButton } from 'react-native-paper';
import React  from 'react';
import  Icon from "react-native-vector-icons";
const MainScreen = createMaterialBottomTabNavigator(
	{
		Settings: {
			screen: SettingsScreen,
			navigationOptions: {
				title: 'الإعدادات'
			}
		},
		Notifications: {
			screen: NotificationsScreen,
			navigationOptions: {
				title: 'الإشعارات'
			}
		},
		Search: {
			screen: SearchScreen,
			navigationOptions: {
				title: 'البحث'
			}
		},
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				title: 'الرئيسية',
				tabBarOptions: {
					showIcon: true
				},
				  tabBarIcon: ({ tintColor }) => (
					<Icon name="ios-bookmarks" size={20}/>
				  )
				// tabBarIcon: (<IconButton name="home" color={Colors.primary} />)
			}
		}
	},
	{
		initialRouteName: 'Home',
		shifting: false,
		activeColor: Colors.primary,
		inactiveColor: Colors.secondary,
		barStyle: {
			backgroundColor: Colors.white
		}
	}
);

export default MainScreen;
