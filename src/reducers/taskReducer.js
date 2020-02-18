import {
  ADD_TASK,
  FETCH_TASK,
  COMPLETE_TASK,
  DELETE_TASK
} from "../actions/types";

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task._id !== action.payload.id);
    case COMPLETE_TASK:
      return state.map(task => {
        if (task._id !== action.payload.id) {
          return task;
        } else {
          return { ...task, isCompleted: true };
        }
      });
    case FETCH_TASK:
      return action.tasks;
    default:
      return state;
  }
}
