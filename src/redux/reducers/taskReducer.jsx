const initialState = {
  taskContainer: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        taskContainer: [...state.taskContainer, action.payload],
      };
    case 'DEL_TASK':
      return {
        ...state,
        taskContainer: state.taskContainer.filter(
          task => task.id !== action.payload,
        ),
      };
    case 'UPDATE_TASK':
      return {
        ...state,
        taskContainer: state.taskContainer.map(task =>
          task.id === action.payload.id ? {...task, ...action.payload} : task,
        ),
      };
    case 'TOGGLE_TASK':
      return {
        ...state,
        taskContainer: state.taskContainer.map(task =>
          task.id === action.payload
            ? {...task, isComplete: !task.isComplete}
            : task,
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
