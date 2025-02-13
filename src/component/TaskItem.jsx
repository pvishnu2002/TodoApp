import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../utils/Colors';

const TaskItem = ({item, onCheck, onDelete, onPress}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(item)}
      style={styles.taskContainer}>
      <View style={styles.taskContent}>
        {item.imageUri ? (
          <Image source={{uri: item.imageUri}} style={styles.image} />
        ) : (
          <View style={styles.imgContainer}>
          <Feather name="user" size={28} color={Colors.black} />
          </View>
        )}
        <View style={{width: '68%', marginLeft: 10}}>
          <Text style={styles.taskText}>{item.title}</Text>
          {item.description && (
            <Text style={styles.taskDes}>{item.description}</Text>
          )}
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <AntDesign name="delete" color={Colors.red} size={24} />
      </TouchableOpacity>
      <CheckBox
        value={item.isComplete}
        onValueChange={() => onCheck(item.id)}
        tintColors={{true: Colors.background, false: Colors.textGrey}}
      />
    </TouchableOpacity>
  );
};

const styles = {
  taskContainer: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 14,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskText: {
    fontSize: 16,
    color: '#000',
  },
  taskDes: {
    fontSize: 14,
    color: 'gray',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  imgContainer: {
    backgroundColor: 'lightgrey',
    borderRadius: 60,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
};

export default TaskItem;
