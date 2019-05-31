import React , {Component} from 'react';
import { StyleSheet,Button, Text, View, BackHandler } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  StackActions,
} from 'react-navigation';


export default class App extends React.Component {
  render() {
    return <Appcontainer/>;
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
  componentWillUnmount(){
    this.props.navigation.dispatch(
      StackActions.pop(
        {
          n: 1 }
        ));
      }
      
      render() {
        return (
          <View style={styles.container}>
          <Text> Screen 3 </Text>
          <Text> Press Back to
          Go to Screen 1
          </Text>
          </View>
          
        );
      }
      
    }
    const popAction = StackActions.pop({
      n: 1,
    });
    
    
    
    const stackNavigator = createStackNavigator(
      {
        S1: First,
        S2: Second,
        S3: Third,
      },
      {
        // headerTransitionPreset: 'uikit',
        // mode: 'modal',
      }
    );
    //Holder for switch Navigator
    
    const Appcontainer = createAppContainer(stackNavigator);
    
    
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
