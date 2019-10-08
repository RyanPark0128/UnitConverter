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
        validation: "",
        equation: [],
        oper: true,
        selected: "button"
      }
    }

    static navigationOptions = {
        header: null,
    };

    buttonPressed(text) {
      if (text === ".") {
        if (this.state.validation.includes(".")) {
          Alert.alert(
            "Cannot be two period"
          )
        } 
        else {
          this.setState({
            resultText: this.state.resultText + text,
            validation: this.state.validation + text,
            oper: true
          })
        }
      } else if (text === "AC") {
        this.setState({
          resultText: "",
          equation: [],
          validation: "",
          oper: true,
          answer: ""
        })
      } else if (text === "x" || text === "/" || text === "+" || text === "-") {
        if (this.state.oper === false) {
          this.setState({
            resultText: this.state.resultText + " " + text + " ",
            equation: [...this.state.equation, this.state.validation, text],
            validation: "",
            oper: true
          })
         }
      }
        else if (text === "=") {
          if (this.state.oper === false) {
            this.setState({
              equation: [...this.state.equation, this.state.validation],
            }, () => {
              let copy = this.state.equation
              while(copy.includes("x") || copy.includes("/")) {
                for (i=0; i< copy.length; i++) {
                  if (copy[i] === "x") {
                    copy.splice((i-1),3, copy[i-1] * copy[i+1])
                    break;
                  }
                  if (copy[i] === "/") {
                    copy.splice((i-1),3, copy[i-1] / copy[i+1])
                    break;
                  }
                }
              }
              while(copy.includes("+") || copy.includes("-")) {
                for (i=0; i<copy.length; i++) {
                  if (copy[i] === "+") {
                    copy.splice((i-1),3, Number(copy[i-1]) + Number(copy[i+1]))
                    break;
                  }
                  if (copy[i] === "-") {
                    copy.splice((i-1),3, Number(copy[i-1]) - Number(copy[i+1]))
                    break;
                  }
                }
              }
              this.setState({
                resultText: "",
                validation: copy,
                equation: [],
                answer: copy
              })
          })
        }
      }  
      else {
      this.setState({
        resultText: this.state.resultText + text,
        validation: this.state.validation + text,
        oper : false
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

      return (
        <View style={styles.container}>
          <View>
            <Text></Text>
          </View>
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
          <Button onPress={() => navigate('Home')} title="<<"/>
        </View>
      );
    }
  }

export default CalculationScreen