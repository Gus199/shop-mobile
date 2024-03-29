import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Button from '../componenets/Button';
import routes from '../navigation/routes';
import Screen from '../componenets/Screen';
import Card from '../componenets/Card';
import colors from '../config/Colors';
import AppText from '../componenets/AppText';
import ActivityIndicator from '../componenets/ActivityIndicator';
import listingsApi from '../api/listings';
import useApi from '../hooks/useApi';

function ListingsScreen({ navigation }) {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't retieve the listings. </AppText>
          <Button title='Retry' onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={loading} />
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={'$' + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
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
