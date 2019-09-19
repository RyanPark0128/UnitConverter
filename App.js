import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Currency'},
          {key: 'Length'},
          {key: 'Speed'},
          {key: 'Temperature'},
          {key: 'Area'},
          {key: 'Power'},
          {key: 'Density'},
          {key: 'Acceleration'},
          {key: 'Cooking'},
          {key: 'Data'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'skyblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   backgroundColor: 'black',
   alignItems: 'center',
   justifyContent: 'center'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:"white"
  },
})