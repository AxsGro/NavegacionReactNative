// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import LoginScreen from './src/screens/LoginScreen';
import OrderScreen from './src/screens/OrderScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import UserScreen from './src/screens/UserScreen';
import MenuScreen from './src/screens/MenuScreen';

// const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ tabBarIcon: () => <Ionicons name="home" size={24} color="black" /> }} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} options={{ tabBarIcon: () => <Ionicons name="notifications" size={24} color="black" /> }} />
        <Tab.Screen name="Login" component={LoginScreen} options={{ tabBarIcon: () => <Ionicons name="log-in" size={24} color="black" /> }} />
        <Tab.Screen name="Register" component={RegisterScreen} options={{ tabBarIcon: () => <Ionicons name="person-add" size={24} color="black" /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


/*
<Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Order" component={OrderScreen} />
        <Drawer.Screen name="User" component={UserScreen} />
        <Drawer.Screen name="Menu" component={MenuScreen} />
      </Drawer.Navigator>
*/