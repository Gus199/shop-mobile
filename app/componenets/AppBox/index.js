import React from 'react';
import { View } from 'react-native';
import styles from './styles';
function AppText({ children }) {
  return <View style={styles.text}>{children} </View>;
}


export default AppText;

