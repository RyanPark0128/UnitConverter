import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'


const category = [
  {
    id: 1,
    name:"Length",
  },

  {
    id: 2,
    name: "Temperature",
  },

  {
    id: 3,
    name: "Currency"
  },

  {
    id: 4,
    name: "Volume",
  },
  
  {
    id: 5,
    name: "Area",
  }
]

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 20,
   backgroundColor: 'white',
   alignItems: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color:"white"
  },
  button: {
    width:325,
  },
  input: {
    paddingBottom: 50,
    width: 200
  },
  title : {
  },
})

class HomeScreen extends Component {
    render(){
      const { navigate } = this.props.navigation
      const ListCate = category.map((cat) =>
      <Button
        key={cat.id}
        title={cat.name}
        type="solid"
        onPress={() => navigate('Calculation', {name: cat.name})}
      />  
    )
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text>Converter</Text>
          </View>
            <Input
                placeholder='  Search'
                leftIcon={{ type: 'font-awesome', name: 'search' }}
                style={styles.input}
            />
            <Text>
                \n
            </Text>
            <View>
                {ListCate}
            </View>
        </View>
      )
    }
}

export default HomeScreen

