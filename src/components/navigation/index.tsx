import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const Tab = createBottomTabNavigator();
import Home from 'src/pages/home'
import Search from 'src/pages/search'


const Tabs = () => {
    return (
        <SafeAreaView style={{ minHeight: '100%', minWidth: '100%' }}>
            <View style={{ backgroundColor: '#f00', minHeight: 50 }}>
                <Text style={{ color: '#fff' }}>Aqui vai ficar a busca</Text>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        position: 'absolute',
                        bottom: 25,
                        left: 25,
                        right: 25,
                        elevation: 0,
                        backgroundColor: '#fff',
                        borderRadius: 8,
                        height: 90,
                    },
                }}>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Search} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

export default Tabs;