import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppText from './AppText';
import Colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} resizeMode='contain' />
          <View style={styles.detailsContainer}>
            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
          </View>
          <MaterialCommunityIcons  name='chevron-right' size={25} color={Colors.medium}/> 
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 15,
  },
  detailsContainer: {
    flex: 1,
   marginLeft: 10,
   justifyContent: 'center',

  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: '500',
  },
  subTitle: {
    fontWeight: '500',
  },
  price: {
    color: Colors.medium,
  },
});
