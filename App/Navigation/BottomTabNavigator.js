import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Colors } from '../Themes';
import { HomeScreen, SearchScreen, NotificationsScreen, SettingsScreen } from '../Screens';
import React  from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from "react-native";


const BottomTabNavigator = createMaterialBottomTabNavigator(
	{
		Settings: {
			screen: SettingsScreen,
			navigationOptions: {
				title: 'الإعدادات' , 
				tabBarOptions: {
					showIcon: true
				},
				  tabBarIcon:  ({tintColor }) => (
					<Text>
					<Icon name="settings" size={23} color={tintColor} />
					</Text>)
			}
		},
		Notifications: {
			screen: NotificationsScreen,
			navigationOptions: {
				title: 'الإشعارات' ,
				tabBarOptions: {
					showIcon: true
				},
				  tabBarIcon:  ({tintColor }) => (
					<Text>
					<Icon name="notifications" size={23} color={tintColor} />
					</Text>)
			}
		},
		Search: {
			screen: SearchScreen,
			navigationOptions: {
				title: 'البحث' , 
				tabBarOptions: {
					showIcon: true
				},
				  tabBarIcon:  ({tintColor }) => (
					<Text>
					<Icon name="search" size={23} color={tintColor} />
					</Text>)
			}
			
		},
		Home: {
			screen: HomeScreen,
			navigationOptions: {
				title: 'الرئيسية',
				tabBarOptions: {
					showIcon: true , 
					activeTintColor: Colors.primary,
      				inactiveTintColor: Colors.secondary,
				},
				  tabBarIcon: ({tintColor }) => (
					<Text>
					<Icon name="home" size={23} color={tintColor} />
					</Text>)
				// tabBarIcon: (<IconButton name="home" color={Colors.secondary} />)
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

export default BottomTabNavigator;
