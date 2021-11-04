import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      

    <View style={styles.pcontainer}>


    <View style={styles.titles}>
      <Text style={styles.tiyle}> E-COMMERCE </Text>
      <text style={styles.subtitle}> Enter your detailsto login </text>
    </View>


    </View>




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pcontainer: {
    width: "100%",
    height: "100%",


  },
  titles: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",

  },
  title: {
    fontsize: 40,
    fontWeight: "bold",

  },
  subtitle: {
    fontsize:15,
    color: "grey",

  },
});
