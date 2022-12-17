import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import AppButton from './app/componenets/AppButton';
import MessagesScreen from './app/screens/MessagesScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import Card from './app/componenets/Card';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Screen from './app/componenets/Screen';
import AppTextInput from './app/componenets/AppTextInput';
import { Switch } from 'react-native-gesture-handler';
import AppPicker from './app/componenets/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  return <ListingEditScreen />;
}
