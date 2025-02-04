export const AddTask = (item) => ({
    type : 'ADD_TASK',
    payload:item,
});

export const DeleteTask = (item) => ({
    type : 'DEL_TASK',
    payload:item,
});

export const ToggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
  });

export const UpdateTask = (item) => ({
    type:'UPDATE_TASK',
    payload:item,
});