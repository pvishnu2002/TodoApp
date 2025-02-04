import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors } from '../utils/Colors';
import HeaderComponent from '../component/HeaderComponent';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
    <HeaderComponent HeaderTxt={'About Us Screen'}/>
      <Text style={styles.txt}>This is a simple task manager app built with React Native.</Text>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white,
  },
  txt:{
    fontSize:20,
    fontWeight:'500',
    margin:10,
    color:Colors.black
  }
});