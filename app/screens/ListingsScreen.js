import React, { useState, useEffect } from 'react';
import {  FlatList, StyleSheet } from 'react-native';
import Button from '../componenets/Button'
import routes from '../navigation/routes';
import Screen from '../componenets/Screen';
import Card from '../componenets/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import AppText from '../componenets/AppText';

function ListingsScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  const loadListings = async () => {
    const response = await listingsApi.getListings();
    if (!response.ok) return setError(true);
     
    setError(false)
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && <>
      <AppText>Couldn't retieve the listings. </AppText>
      <Button  title='Retry' onPress={loadListings}/>
      </>}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
