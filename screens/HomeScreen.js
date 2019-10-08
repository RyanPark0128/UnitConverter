import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Input, colors, ThemeProvider } from 'react-native-elements';
// import { SearchBar } from 'react-native-elements';
import SearchBar from "react-native-dynamic-search-bar";
import { ThemeColors } from 'react-navigation';
import * as Font from 'expo-font';



const category = [
  {
    id: 1,
    name: "Length",
  },

  {
    id: 2,
    name: "Temperature",
  },

  {
    id: 3,
    name: "Weight"
  },

  {
    id: 4,
    name: "Volume",
  },
  
  {
    id: 5,
    name: "Area",
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
    paddingTop: 30,
    paddingBottom: 30,
  },
  headerText: {
    fontSize: 40,
    fontFamily: 'Poppins-Bold',
  },
})

const theme = {
  Button: {
    titleStyle: {
      //in button text color
      color: 'black',
      //in button font family
      fontFamily: 'Poppins-Bold',
    }
  },
}

class HomeScreen extends Component {
    //import font and check
    state = {
      fontLoaded: false,
    };
    async componentDidMount() {
      await Font.loadAsync({
        'Poppins-Bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
      });
  
      this.setState({ fontLoaded: true });
    }

    //To hide the ActionBar/NavigationBar
    static navigationOptions = {
      header: null,
    };

    //search bar
    // state = {
    //   search: '',
    // };
    // updateSearch = search => {
    //   this.setState({ search });
    // }
    

    render(){
      //search bar
      //const { search } = this.state;

      const { navigate } = this.props.navigation
      const ListCate = category.map((cat) =>
      <ThemeProvider theme={theme}>
        {
          this.state.fontLoaded ? (
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
        ) : null
      }
      </ThemeProvider>
    )

      return (
        <View style={styles.container}>
        
        <View style={styles.headerAlign}>
          {
            this.state.fontLoaded ? (
              <Text style={styles.headerText}>Converter</Text>
            ) : null
          }  
        </View>
          <View>
              {ListCate}
          </View>
        </View>
      )
    }
}

export default HomeScreen






{/* <View>
  <SearchBar
    placeholder="Search here"
    onChangeText={text => {
      console.log(text)
    }}
    onPressCancel={() => {
      this.filterList("");
    }}
    onPress={() => alert("onPress")}
  />
</View> */}


{/* <SearchBar
  lightTheme
  placeholder='Search'
  onChangeText={this.updateSearch}
  value={search}

  containerStyle={{
    backgroundColor: 'transparent',
    borderTopWidth: 0,
    borderBottomWidth: 0,
    width: 300,
    // borderRadius: 0,
  }}

  inputStyle={{
    // backgroundColor: 'white'
  }} 
/>*/}

