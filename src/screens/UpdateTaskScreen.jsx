import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderComponent from '../component/HeaderComponent';
import {Colors} from '../utils/Colors';
import { useDispatch } from 'react-redux';
import { UpdateTask } from '../redux/action';
import { useNavigation } from '@react-navigation/native';

const UpdateTaskScreen = ({route}) => {
  const {item} = route.params;
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleError, setTitleError] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const handleUpdateTask = () => {
    if (!title) {
        setTitleError('Title is required!');
        return;
    }

    const updateObj = {
        id:item.id,
        isComplete:false,
        title:title,
        description:description,
    };

    dispatch(UpdateTask(updateObj));
    navigation.navigate('BottomTabBar');
  };

  useEffect(() => {
    if (item) {
      setTitle(item.title);
      setDescription(item.description);
    }
  }, [item]);
  return (
    <View style={styles.container}>
      <HeaderComponent HeaderTxt={'Update Task'} backIcon={true} />
      <View style={styles.inputContainer}>
        <View style={{marginVertical: 5}}>
          <TextInput
            placeholderTextColor="#888"
            placeholder="Add Title"
            style={styles.titleInput}
            value={title}
            onChangeText={e => setTitle(e)}
          />
          {titleError ? (
            <Text style={styles.errorText}>{titleError}</Text>
          ) : null}
        </View>
        <TextInput
          placeholderTextColor="#888"
          placeholder="Add Task Description"
          style={styles.descInput}
          value={description}
          onChangeText={e => setDescription(e)}
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity style={styles.addTaskBtn} onPress={handleUpdateTask}>
        <Text style={styles.btnText}>Update Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UpdateTaskScreen;

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
    color: Colors.black,
  },
  descInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
    marginTop: 10,
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
    shadowOffset: {width: 0, height: 2},
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
