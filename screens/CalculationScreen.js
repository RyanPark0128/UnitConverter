import React, { Component, Fragment } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  result: {
    flex: 1,
    backgroundColor : "red",
    alignItems : "flex-end"
  },
  calculation: {
    flex: 2,
    backgroundColor : "green",
    alignItems : "flex-end"
  },
  buttons: {
    flex:7,
    flexDirection: "row",
    backgroundColor: "black"
  },
  numbers: {
    flex: 3,
    backgroundColor : "yellow"
  },
  operations: {
    flex:1,
    backgroundColor : "black",
    justifyContent : "space-around",
    alignItems: "stretch",
    
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-around',
    alignItems: "center"
  }
})

class CalculationScreen extends Component {
    
    static navigationOptions = {
        header: null,
    };
    render() {
      const {navigate} = this.props.navigation;
      const name = this.props.navigation.state.params.name
      return (
        <View style={styles.container}>
          <Button onPress={() => navigate('Home')} title="<<"/>
          <View style={styles.result}>
            <Text>6974</Text>
          </View>
          <View style={styles.calculation}>
            <Text>6974</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              <View style={styles.row}>
                <Button title="7"/>
                <Button title="8"/>
                <Button title="9"/>
              </View>
              <View style={styles.row}>
                <Button title="4"/>
                <Button title="5"/>
                <Button title="6"/>
              </View>
              <View style={styles.row}>
                <Button title="1"/>
                <Button title="2"/>
                <Button title="3"/>
              </View>
              <View style={styles.row}>
                <Button title="0"/>
                <Button title="AC"/>
                <Button title="."/>
              </View>
            </View>
            <View style={styles.operations}>
                <Button title="/"/>
                <Button title="x"/>
                <Button title="-"/>
                <Button title="+"/>
            </View>
          </View>
        </View>
      );
    }
  }

export default CalculationScreen