import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Colors } from '../utils/Colors';

const TaskItem = ({ item, onCheck, onDelete, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)} style={styles.taskContainer}>
      <View style={styles.taskContent}>
        <CheckBox
          value={item.isComplete}
          onValueChange={() => onCheck(item.id)}
          tintColors={{ true: Colors.background, false: Colors.textGrey }}
        />
        <View style={{ width: '80%',}}>
          <Text style={styles.taskText}>{item.title}</Text>
          {item.description && <Text style={styles.taskDes}>{item.description}</Text>}
        </View>
      </View>
      <TouchableOpacity onPress={() => onDelete(item.id)}>
        <AntDesign name="delete" color={Colors.red} size={24} />
      </TouchableOpacity>
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
};

export default TaskItem;
