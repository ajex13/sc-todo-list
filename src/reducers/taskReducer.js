import {
  ADD_TASK,
  FETCH_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAIL,
  COMPLETE_TASK,
  DELETE_TASK
} from "../actions/types";

const initialState = {
    tasks: [],
    loading: false,
    error: null
  };

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {...state,
         tasks : [...state.tasks, action.payload]};
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
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_TASK_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload.products
      };
    case FETCH_TASK_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        tasks: []
      };
    default:
      return state;
  }
}
