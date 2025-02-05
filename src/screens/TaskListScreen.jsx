import { StyleSheet, View, ActivityIndicator, FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderComponent from '../component/HeaderComponent';
import { Colors } from '../utils/Colors';
import TaskItem from '../component/TaskItem';

const TaskListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchTaskData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      setTasks(data);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const handleCheck = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };


  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>No Tasks Available</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <HeaderComponent HeaderTxt={'Task List'} />

      {loading ? (
        <ActivityIndicator size="large" color={Colors.primary} style={styles.loader} />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem
              item={item}
              onCheck={() => handleCheck(item.id)}
              onDelete={() => handleDelete(item.id)}
              onPress={() => {}}
            />
          )}
          ListEmptyComponent={renderEmptyList}
        />
      )}
    </View>
  );
};

export default TaskListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  emptyText: {
    fontSize: 16,
    color: 'gray',
  },
});
