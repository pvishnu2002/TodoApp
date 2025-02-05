import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import HeaderComponent from '../component/HeaderComponent';
import {Colors} from '../utils/Colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteTask, ToggleTask} from '../redux/action';
import TaskItem from '../component/TaskItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const task = useSelector(state => state.taskContainer.taskContainer);

  console.log('Taskk====', task);
  const handleNavigation = () => {
    navigation.navigate('TaskAddScreen');
  };

  const handleDelete = id => {
    dispatch(DeleteTask(id));
  };

  const handleCheck = id => {
    dispatch(ToggleTask(id));
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Task Avaiable</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <HeaderComponent HeaderTxt={'All Tasks'} />

      <FlatList
        data={task}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
        <TaskItem
          item={item}
          onCheck={handleCheck}
          onDelete={handleDelete}
          // eslint-disable-next-line no-shadow
          onPress={(item) => navigation.navigate('UpdateTaskScreen', { item: item })}
        />
      )}
        ListEmptyComponent={renderEmptyList}
      />

      <TouchableOpacity style={styles.plusIcon} onPress={handleNavigation}>
        <AntDesign name="plus" size={24} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
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
    gap: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    maxWidth: '80%',
    flexShrink: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  plusIcon: {
    backgroundColor: Colors.background,
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30%',
  },
  emptyText: {
    fontSize: 22,
    fontWeight: '600',
  },
});
