import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Login from '../screens/login/Login';
import ScreenList from '../utils/ScreenList';
import HomeScreen from '../screens/home/HomeScreen';
import UsersListScreen from '../screens/home/UsersListScreen';
const Stack = createNativeStackNavigator();
const Home = createDrawerNavigator();

export function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenList.LOGIN}
      screenOptions={{gestureEnabled: false, headerShown: false}}>
      <Stack.Screen
        name={ScreenList.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={ScreenList.HOME_STACK}
        component={homeStack}
      />
    </Stack.Navigator>
  );
}

export function homeStack() {
  return (
    <Home.Navigator
      initialRouteName={ScreenList.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
      }}>
      <Home.Screen
        name={ScreenList.HOME_SCREEN}
        component={HomeScreen}
        options={{}}
      />

      <Home.Screen
        name={ScreenList.USERS_LIST}
        component={UsersListScreen}
        options={{}}
      />
    </Home.Navigator>
  );
}
