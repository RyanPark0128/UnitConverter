import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements'


const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
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
  }
})

const category = [{
  id: 1,
  name:"Currency",
  },
  {
  id: 2,
  name: "Length",
  },
  {
  id: 3,
  name: "Speed"
  },
  {
  id: 4,
  name: "Temperature",
  },
  {id: 5,
  name: "Power",
}]

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

