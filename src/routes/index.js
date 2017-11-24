import { StackNavigator } from 'react-navigation'

import Home from '../screens/Home'
import Add from '../screens/Add'

export default StackNavigator({
	Home: { screen: Home },
	Add: { screen: Add }
})