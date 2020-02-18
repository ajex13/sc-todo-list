import {
  ADD_TASK,
  FETCH_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  FETCH_TASK_SUCCESS,
  FETCH_TASK_FAIL
} from "./types";
import axios from "axios";

const baseURL = "http://localhost:4000";

// Add task
export const createTask = (payload) => {
  return dispatch => {
    return axios
      .post(`${baseURL}/tasks`, payload)
      .then(response => {
        dispatch(createTaskSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const createTaskSuccess = data => {
  return {
    type: ADD_TASK,
    payload: data
  };
};

// Fetch tasks
export const fetchAllTasks = () => {
//   console.log("fetchAllTasks called");
  return dispatch => {
    dispatch(fetchTasks())
    return axios
      .get(`${baseURL}/tasks`)
      .then(response => {
        dispatch(fetchProductsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchProductsFailure(error))  
        throw error;
      });
  };
};
export const fetchTasks = tasks => {
  return {
    type: FETCH_TASK
  };
};

export const fetchProductsSuccess = products => ({
  type: FETCH_TASK_SUCCESS,
  payload: { products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_TASK_FAIL,
  payload: { error }
});
// Complete task
export const completeTask = id => {
  return dispatch => {
    return axios
      .put(`${baseURL}/tasks/${id}`)
      .then(response => {
        dispatch(completeTaskSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const completeTaskSuccess = data => {
  return {
    type: COMPLETE_TASK,
    payload: {
      id : data._id
    }
  };
};

// Delete task
export const deleteTask = id => {
  return dispatch => {
    return axios
      .delete(`${baseURL}/tasks/${id}`)
      .then(response => {
        dispatch(deleteTaskSuccess(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};

export const deleteTaskSuccess = id => {
  return {
    type: DELETE_TASK,
    payload: {
      id
    }
  };
};
