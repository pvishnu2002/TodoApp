import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import HeaderComponent from '../component/HeaderComponent';
import { useDispatch } from 'react-redux';
import { AddTask } from '../redux/action';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../utils/Colors';

const TaskAddScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handleCreateTask = () =>{
    setTitleError('');
    if(!title.trim()){
      setTitleError('Title is required');
      return;
    }
    const taskObj = {
      id:Date.now(),
      isComplete:false,
      title:title,
      description:description,
    };
    dispatch(AddTask(taskObj));
    navigation.navigate('BottomTabBar');
  };
  return (
    <View style={styles.container}>
      <HeaderComponent HeaderTxt={'Add Task'} backIcon={true}/>

      <View style={styles.inputContainer}>
        <View style={{marginVertical:5}}>
        <TextInput
          placeholder="Add Title"
          placeholderTextColor="#888"
          style={styles.titleInput}
          value={title}
          onChangeText={(e) => setTitle(e)}
        />
        {titleError ? <Text style={styles.errorText}>{titleError}</Text> : null}
        </View>
        <TextInput
          placeholder="Add Task Description"
          placeholderTextColor="#888"
          style={styles.descInput}
          value={description}
          onChangeText={(e) => setDescription(e)}
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.addTaskBtn} onPress={handleCreateTask}>
        <Text style={styles.btnText}>Create Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskAddScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  inputContainer: {
    padding: 20,
  },
  titleInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color:Colors.black,
  },
  descInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    marginTop:10,
  },
  addTaskBtn: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  btnText: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: Colors.red,
    fontSize: 14,
  },
});
