import { StyleSheet, Platform } from 'react-native';
const styles = StyleSheet.create({
  text: {
    // color: '#ffff',
    color: 'black',
//  alignSelf: 'center',
    ...Platform.select({
      ios: {
        // padding: 20,
        // fontSize:20,
        // fontSize: 20,
        // fontFamily: 'Avenir',
      },
      android: {
        // fontSize: 18,
        // fontFamily: ' Roboto',
      },
    }),
  },
});

export default styles


