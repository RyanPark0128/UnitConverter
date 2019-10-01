import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'
import CalculationScreen from './screens/CalculationScreen'


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Calculation: {screen: CalculationScreen}
});

const App = createAppContainer(MainNavigator);

export default App;