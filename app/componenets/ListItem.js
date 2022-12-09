import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import AppText from './AppText';
import Colors from '../config/colors';
import Swipeable from 'react-native-gesture-handler/Swipeable';
//import { TapGestureHandler, RotationGestureHandler } from 'react-native-gesture-handler';
function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={Colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} resizeMode='contain' />
          <View>
            <AppText style={styles.text}>{title}</AppText>
            <AppText style={styles.price}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  text: {
    fontWeight: '500',
  },
  price: {
    color: Colors.medium,
  },
});
