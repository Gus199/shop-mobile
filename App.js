import React, { useState, useEffect } from 'react';
// import {AppLoading} from 'expo';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import OfflineNotice from './app/componenets/OfflineNotice';

import AuthContext from './app/auth/context';

import authStorage from './app/auth/storage';
import jwtDecode from 'jwt-decode';

const Tab = createBottomTabNavigator();


export default function App() {
  const [user, setUser] = useState();
  // const [isReady, setIsReady] = useState(false);

//   const restoreUser = async () =>{
//     const user = await authStorage.getUser()
//     if(user) setUser(user);
   
//   }
// useEffect(() => {
//   restoreUser()
// }, [])
 
  // const restoreUser = async () => {
  //   const user = await authStorage.getUser();
  //   if (user) setUser(user);
  // };

  // if (!isReady)
  //   return (
  //     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
  //   );

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <OfflineNotice />
      <NavigationContainer theme={navigationTheme}>
        {user ? <AppNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}