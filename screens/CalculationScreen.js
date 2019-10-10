import React, { Component } from 'react';
import { Alert, StyleSheet, Button, View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    marginHorizontal: 16,
    backgroundColor: 'white',
  },

  //header
  headerAlign: {
    paddingTop: 30,
    paddingBottom: 45,

  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
  },
  
  //small container
  smallContainer: {
    //dropshadow
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'transparent',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 15,
    elevation: 1,
    flex:3
  },

  calculatorLayout: {
    flex:1,
    backgroundColor:"grey"
  },

  result: {
    backgroundColor : "white",
    alignItems : "flex-end",
  },
  calculation: {
    backgroundColor : "red",
    alignItems : "flex-end",
  },
  buttons: {
    flexDirection: "row",
  },
  numbers: {
    flex: 1,
    backgroundColor : "grey",
    
  },

  row: {
    flexDirection: "row",
    justifyContent: 'space-around',
    fontSize: 30,
    marginBottom:23
  },
  font: {
    fontSize: 30,
    color: "white",
  },
  numbut: {
    width:30,
    alignItems: "center"
  }
})


class CalculationScreen extends Component {
  //import font and check
  state = {
    fontLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
      'Poppins-Medium': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
    });

    this.setState({ fontLoaded: true });
  }
    
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
      } else if (text === "C") {
        this.setState({
          resultText: "",
          equation: [],
          validation: "",
          oper: true,
          answer: ""
        })
      } else if (text === "x" || text === "÷" || text === "+" || text === "-") {
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
              while(copy.includes("x") || copy.includes("÷")) {
                for (i=0; i< copy.length; i++) {
                  if (copy[i] === "x") {
                    copy.splice((i-1),3, copy[i-1] * copy[i+1])
                    break;
                  }
                  if (copy[i] === "÷") {
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
      let nums = [["C", "", "","÷"],[7,8,9,"×"],[4,5,6,"-"],[1,2,3,"+"],[".", 0, "<", "="]]
      for(let i = 0; i < 5; i++) {
        let row = []
        for(let j=0; j<4; j++) {
          row.push(<TouchableOpacity style={styles.numbut} onPress={() => this.buttonPressed(nums[i][j])}>
            <Text style={styles.font}>{nums[i][j]}</Text>
            </TouchableOpacity>)
        }
        rows.push(<View style={styles.row}>{row}</View>)
      }
      const {navigate} = this.props.navigation;

      return (
        //safe area
        <View style={styles.container}>

          {/* haeder */}
          <View style={styles.headerAlign}>
            <Text style={styles.headerText}>Length</Text>
          </View>
          <Button
            onPress={() => navigate('Home')} 
            title= "<<"
            />
          
          {/* container */}
          <ScrollView style={styles.smallContainer}>
            <View style={styles.result}>
              <TouchableOpacity style={{margin: 50,}}>
                <Text>{this.state.resultText}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.calculation}>
              <Text>{this.state.answer}</Text>
            </View>
            </ScrollView>
            <View style={styles.calculatorLayout}>
              <View style={styles.buttons}>
                <View style={styles.numbers}>
                  {rows}
                </View>
              </View>
            </View>
        </View>
      );
    }
  }

export default CalculationScreen