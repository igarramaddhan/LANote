import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Add from '../screens/Add'
import Update from '../screens/Update'
import { StatusBar } from 'react-native'

export default StackNavigator(
	{
		Home: {
			screen: Home,
			navigationOptions: {
				title: 'Home'
			}
		},
		Add: {
			screen: Add,
			navigationOptions: {
				title: 'Add Note'
			}
		},
		Update: {
			screen: Update,
			navigationOptions: {
				title: 'Edit Note'
			}
		}
	},
	{
		navigationOptions: {
			headerStyle: {
				paddingTop: StatusBar.currentHeight,
				height: 56 + StatusBar.currentHeight,
				elevation: 3
			},
			headerTitleStyle: {
				fontFamily: 'Boogaloo',
				alignSelf: 'center',
				fontWeight: 'normal',
				fontSize: 25
			}
		}
	}
)