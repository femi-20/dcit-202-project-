import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , ImageBackground
} from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import ShoeItem from './components/shoe item';

export default function App() {
  return (
    <View style={styles.container}>


      <ShoeItem />
    
    <statusBar style="auto"/>

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
  
});
