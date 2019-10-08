import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, AsyncStorage } from 'react-native';
import { Button, Input, ThemeProvider } from 'react-native-elements'


const category = [
  {
    id: 1,
    name: "Length",
    unit : {
      kilometer : "km",
      meter : "m",
      centimeter : "cm",
      milimeter : "mm",
	    mile : "mi",
      yard : "yd",
      foot : "ft",
      inch : "in"
    }
  },

  {
    id: 2,
    name: "Temperature",
    unit : {
      celcius : "C",
      fahrenheit : "F",
      kelvin : "K",
    }
  },
  {
    id: 3,
    name: "Volume",
    unit : {
      cubicMeter : "m3",
      liter : "L",
      milliliter : "ml",
	    cubicFeet : "mi",
      cubicInch : "yd",
    }
  },
  
  {
    id: 4,
    name: "Area",
    unit : {
      squareKilometer : "km",
      sqaureMeter : "m",
      squareMile : "mi",
      squareYard : "yd",
      sqaureFeet : "ft",
      squareInch : "in",
      acre : "acre",
      hectare : "hectare"
    }
  },
]

const styles = StyleSheet.create({

  //safe area
  container: {
   flex: 1,
   marginTop: 30,
   marginBottom: 30,
   marginHorizontal: 16,
   backgroundColor: 'white',
  },

  //header
  headerAlign: {
    paddingTop: 20,
    padding: 20,
  },
  headerText: {
    fontSize: 30,
  },

  //search bar
  input: {
    paddingBottom: 50,
    width: 200
  },
  searchBar: {
    paddingBottom: 30,
  },
})

const theme = {
  Button: {
    //in button text color
    titleStyle: {
      color: 'black'
    }
  }
}

class HomeScreen extends Component {
    //To hide the ActionBar/NavigationBar
    constructor(props) {
      super(props);
      this.state = {
        selected: undefined
      };
    }

    static navigationOptions = {
      header: null,
    };

    onValueChange(value) {
      this.setState({
        selected: undefined
      });
    }

    render(){
      let initial = {
        id: 1,
        name: "Length",
        unit : {
          kilometer : "km",
          meter : "m",
          centimeter : "cm",
          milimeter : "mm",
          mile : "mi",
          yard : "yd",
          foot : "ft",
          inch : "in"
        }
      }
      const { navigate } = this.props.navigation
      const ListCate = category.map((cat) =>
      <ThemeProvider theme={theme}>
        <Button
        type="clear"
        title={cat.name}
        
        buttonStyle={{
          //dropshadow
          borderWidth: 1,
          borderRadius: 4,
          borderColor: 'white',
          borderBottomWidth: 0,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.15,
          shadowRadius: 15,
          elevation: 1,
          // marginLeft: 5,
          // marginRight: 5,
          // marginTop: 10,
          
          //in button text alignment
          justifyContent: 'flex-start', 
          backgroundColor: 'white',
          padding: 10,
          marginTop: 20
        }}
        onPress={() => navigate('Calculation', {name: cat.name})}>
        </Button>
      </ThemeProvider>
    )

      return ( 
        <View style={styles.container}>
          <View style={styles.headerAlign}>
              <Text style={styles.headerText}>Converter</Text>
          </View>

          <View style={styles.searchBar}>
            <Input
                placeholder='  Search'
                leftIcon={{ type: 'font-awesome', name: 'search' }}
                style={styles.input}
            />
          </View>

            <View>
                {ListCate}
            </View>
        </View>
      )
    }
}

export default HomeScreen

