import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Colors} from '../utils/Colors';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const HeaderComponent = props => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      {props.backIcon && (
        <TouchableOpacity onPress={handleGoBack}>
        <Feather name="arrow-left" color={Colors.white} size={24} style={styles.leftIcon} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{props.HeaderTxt}</Text>
    </View>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection:'row',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
  },
  leftIcon:{
    marginHorizontal:10,
    marginLeft:0,
    alignItems:'center',
  }
});
