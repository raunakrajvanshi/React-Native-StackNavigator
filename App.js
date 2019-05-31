import React , {Component} from 'react';
import { StyleSheet,Button, Text, View, BackHandler } from 'react-native';
import {
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return <AppContainer/>;
  }

}
class First extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Screen 1 </Text>
      <Button title="Go2 Screen2"
      onPress={()=>this.props.navigation.navigate('S2')}
      />
      </View>
    );
  }
}

class Second extends Component {

  render() {
    return (
      <View style={styles.container}>
      <Text> Screen 2 </Text>
      <Button title="Go2 Screen3"
      onPress={()=>this.props.navigation.navigate('S3')} />
      </View>
    );
  }
}
class Third extends Component {
  constructor(props) {
    super(props)
    //Binding function with this
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
  }
  componentWillMount() {
    // Addding event listener for back button press
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
  }

  handleBackButtonClick() {
    //FUnction defined to handle the button click event
    this.props.navigation.navigate('S1');

    //True because we are telling we handled the backpress
    return true; // if we give false it will go to home
  }
  render() {
    return (
      <View style={styles.container}>
      <Text> Screen 3 </Text>
      <Text> Press Back to go to Screen 1 </Text>
      </View>
    );
  }
}


//Creating a switch Navigator

const switchNavigator = createSwitchNavigator({
  S1: {screen:First},
  S2: {screen:Second},
  S3:{screen:Third}
})

//Holder for switch Navigator
const AppContainer=createAppContainer(switchNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
