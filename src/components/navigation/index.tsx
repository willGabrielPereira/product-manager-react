import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
import Home from 'src/pages/home'
import Search from 'src/pages/search'


const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 25,
                    right: 25,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 8,
                    height: 90,
                }
            }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
        </Tab.Navigator>
    )
}

export default Tabs;