import React, { Component } from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    alignItems: "center",
    
  },
  row: {
    flexDirection: "row",
    flex: 1,
    justifyContent: 'space-around',
    alignItems: "center",
    fontSize: 30
  },
  ops: {
    color: "white",
    fontSize: 30
  },
  font: {
    fontSize: 30
  }
})



class CalculationScreen extends Component {
    
    constructor() {
      super()
      this.state = {
        resultText: "",
        period: true
      }
    }
    static navigationOptions = {
        header: null,
    };

    buttonPressed(text) {
      if (text == ".") {
        if (this.state.period === false) {
          this.setState({
            resultText: 0
          })
        }
        if (this.state.period === true) {
          this.setState({
            resultText: this.state.resultText + text,
            period: false
          })
        }
      }
      if (text === "AC") {
        this.setState({
          resultText: ""
        })
      } else {
      this.setState({
        resultText: this.state.resultText + text
      })
      }
    }
    render() {
      let rows = []
      let nums = [[1,2,3],[4,5,6],[7,8,9],[0, "AC", "."]]
      for(let i = 0; i < 4; i++) {
        let row = []
        for(let j=0; j<3; j++) {
          row.push(<TouchableOpacity onPress={() => this.buttonPressed(nums[i][j])}>
            <Text style={styles.font}>{nums[i][j]}</Text>
            </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
      }

      let operations = ['/', 'x', '-', '+']
      let ops = []
      for (let i=0; i<4; i++) {
        ops.push(<TouchableOpacity onPress={() => this.buttonPressed(operation[i])}>
          <Text style={styles.ops}>{operations[i]}</Text>
        </TouchableOpacity>)
      }
      const {navigate} = this.props.navigation;
      const name = this.props.navigation.state.params.name
      return (
        <View style={styles.container}>
          <Button onPress={() => navigate('Home')} title="<<"/>
          <View style={styles.result}>
            <Text>{this.state.resultText}</Text>
          </View>
          <View style={styles.calculation}>
            <Text></Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
              {/* <View style={styles.row}>
                <Button onPress={() => setResult(7)} title="7"/>
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
              </View> */}
            </View>
            <View style={styles.operations}>
                {ops}
            </View>
          </View>
        </View>
      );
    }
  }

export default CalculationScreen