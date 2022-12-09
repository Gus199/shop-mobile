import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from '../config/colors';
import AppTex from './AppText';
function Card({ title, subTitle, image }) {
  return (
    <View style={styles.car}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppTex style={styles.title}>{title}</AppTex>
        <AppTex style={styles.subTitle}>{subTitle}</AppTex>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  car: {
    borderRadius: 15,
    backgroundColor: Colors.white,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: Colors.secondary,
    fontWeight: 'bold',
  },
});
export default Card;
