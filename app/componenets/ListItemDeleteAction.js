import React from 'react';
import { View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import Colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function ListItemDeleteAction({ onPress }) {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name='trash-can'
          color={Colors.white}
          size={35}
        />
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListItemDeleteAction;
