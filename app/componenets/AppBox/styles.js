import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
  text: {
    box: {
      width: '100%',
      height: 60,
      backgroundColor: 'tomato',
      borderRadius: 40,
    },

    ...Platform.select({
      ios: {
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 18,
        fontFamily: ' Roboto',
      },
    }),
  },
});

export default styles;
