import React, { Component } from 'react';
import { Alert, StyleSheet, Button, View, Text } from 'react-native';
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
  },
  numbut: {
    alignItems: "stretch",
    flex: 2
  }
})



class CalculationScreen extends Component {
    
    constructor() {
      super()
      this.state = {
        resultText: "",
        answer: "",
        equation: []
      }
    }
    static navigationOptions = {
        header: null,
    };

    buttonPressed(text) {
      let result = this.state.resultText
      let ELength = result[result.length - 1]
      if (text === ".") {
        if (this.state.equation[this.state.equation.length - 1].includes(".")) {
          Alert.alert(
            "Cannot be two period"
          )
        } 
        else {
          this.setState({
            resultText: this.state.resultText + text,
            equation: [...this.state.equation, text]
          })

        }
      } else if (text === "AC") {
        this.setState({
          resultText: "",
          equation: []
        })
      } else if (text === "x" || text === "/" || text === "+" || text === "-") {
        if (ELength === "x" || ELength === "/" || ELength === "+" || ELength === "-" ) {
          Alert.alert(ELength)
        } else {
          this.setState({
            resultText: this.state.resultText + " " + text + " ",
            equation: [...this.state.equation, text]
          })
        }

      } else if (text === "=") {

        // for (i=0; i< calculation.length; i++) {
        //   if (calculation[i] === "x") {
        //     equation.push(calculation[i-1] * calculation[i+1])
        //   }
        //   else if (calculation[i] === "/") {
        //     equation.push(calculation[i-1] / calculation[i+1])
        //   }  
        // }
        Alert.alert(this.state.equation)

      }
      // create loop where it uses recursion to calculate * and / first and calculates + and - 
      else {

      this.setState({
        resultText: this.state.resultText + text,
        equation: [...this.state.equation, text]
      })
      }
    }
    render() {
      let rows = []
      let nums = [[1,2,3],[4,5,6],[7,8,9],[0, "AC", "."]]
      for(let i = 0; i < 4; i++) {
        let row = []
        for(let j=0; j<3; j++) {
          row.push(<TouchableOpacity style={styles.numbut} onPress={() => this.buttonPressed(nums[i][j])}>
            <Text style={styles.font}>{nums[i][j]}</Text>
            </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
      }

      let operations = ['/', 'x', '-', '+', '=']
      let ops = []
      for (let i=0; i<5; i++) {
        ops.push(<TouchableOpacity onPress={() => this.buttonPressed(operations[i])}>
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
            <Text>{this.state.answer}</Text>
          </View>
          <View style={styles.buttons}>
            <View style={styles.numbers}>
              {rows}
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