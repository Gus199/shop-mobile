import React from 'react';
import { Text, StyleSheet } from 'react-native';
function AppText({ children }) {
  return <Text style={styles.text}>{children} </Text>;
}

export default AppText;

const styles = StyleSheet.create({
  text: {
    color: 'tomato',
    fontSize: 18,
    fontFamily: ' Roboto',
  },
});
