import React from 'react';
import { StyleSheet, Text, View, StatusBar, TextInput, Dimensions, Platform } from 'react-native';

const { height, width} = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <Text style={styles.title}>To Do List</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} placeholder="New To Do"></TextInput>
      </View>
    </View>
  );
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
    /*
    shaodw 사용
    ios -> shadow ~ ,    android -> elevation
    */
   ...Platform.select({ //플랫폼 선택
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

  }
});
