import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform, ScrollView } from 'react-native';
import { render } from 'react-dom';
import ToDo from "./Todo"

const { height, width} = Dimensions.get("window");

export default class App extends React.Component {
  state = {
    newToDo: ""
  };

  render() {
    const {newToDo} = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Text style={styles.title}>To Do List</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder="New To Do" 
            value={newToDo} onChangeText={this.controlNewToDo} returnKeyType="done"/>
          <ScrollView contentContainerStyle={styles.todos}>
            <ToDo text={"Hello ToDo"}/>
          </ScrollView>
        </View>
      </View>
    );
  }

  controlNewToDo = text => {
    this.setState({
      newToDo: text
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#81BEF7',
    alignItems: 'center'
  },
  title: {
    color: "white",
    fontSize: 50,
    marginTop: 70,
    marginBottom: 30,
    fontWeight: "200"
  },
  card: {
    backgroundColor:"white",
    flex: 1,
    width: width - 25,
    borderRadius: 10, //모서리둥글게
    
   ...Platform.select({ //플랫폼 선택
    /*
    shaodw 사용
    ios -> shadow ~ ,    android -> elevation
    */
    ios: {
      shadowColor: "rgb(50, 50, 50)",
      shadowOpacity: 0.5,
      shadowRadius: 5,
      shadowOffset:{height: -1, width: 0}
    },
    android: {
      elevation: 3
    }
   })
  },
  input:{
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#bbb",
    fontSize: 25
  },
  todos: {
    alignItems: "center"
  }
});
