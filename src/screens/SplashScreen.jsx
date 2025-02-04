import { StyleSheet, Text, View} from 'react-native';
import React,{useEffect} from 'react';
import { Colors } from '../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('BottomTabBar'); 
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <AntDesign name="check" color={Colors.background} size={50} />
      </View>
      <Text style={styles.text}>TodoList</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    color: Colors.white,
    fontSize: 26,
    fontWeight: 'bold',
    alignItems:'center',
  },
});
