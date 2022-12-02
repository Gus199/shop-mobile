import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../componenets/ListItem';
import ListItemDeleteAction from '../componenets/ListItemDeleteAction';
import ListItemSeparator from '../componenets/ListItemSeparator';
import Screen from '../componenets/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/amar.png'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/amar.png'),
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] =useState(false)
  const handleDelete = (message) => {
    setMessages(messages.filter((m) => m.id !== message.id));
  };
  // Delete the message from messages
  // Call the server
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('message selected', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 2,
              title: 'T2',
              description: 'D2',
              image: require('../assets/amar.png'),
            },
          ])
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
