import React, { Component } from 'react';
import { Button } from 'react-native';

class CalculationScreen extends Component {
    static navigationOptions = {
      title: 'Unit',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <Button
          title="Go to Jane's profile"
        />
      );
    }
  }

export default CalculationScreen