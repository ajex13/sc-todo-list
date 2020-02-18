import { ADD_TASK, FETCH_TASK, COMPLETE_TASK, DELETE_TASK } from "./types";
import axios from "axios";

const baseURL = "http://localhost:4000/";

// Add task
export const createTask = ({ title, body }) => {
  return dispatch => {
    return axios
      .post(`${baseURL}/tasks`, { title, body })
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
    payload: {
      _id: data._id,
      title: data.title,
      body: data.body
    }
  };
};

// Fetch tasks
export const fetchAllTasks = () => {
  return dispatch => {
    return axios
      .get(`${baseURL}/tasks`)
      .then(response => {
        dispatch(fetchTasks(response.data));
      })
      .catch(error => {
        throw error;
      });
  };
};
export const fetchTasks = tasks => {
  return {
    type: FETCH_TASK,
    tasks
  };
};

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

export const completeTaskSuccess = id => {
  return {
    type: COMPLETE_TASK,
    payload: {
      id
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
