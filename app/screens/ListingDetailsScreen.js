import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import AppText from '../componenets/AppText';
import ListItem from '../componenets/ListItem';
import Colors from '../config/Colors';
function ListingDetailsScreen() {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/amar.png')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>RedJacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <ListItem  
        image={require('../assets/amar1.png')}
        title='Amar Gher'
        subTitle='5 Listing'
        />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: Colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10

  },
  userContainer: {
    marginVertical: 40,
  }
});
export default ListingDetailsScreen;
