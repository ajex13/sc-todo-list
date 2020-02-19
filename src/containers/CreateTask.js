import { connect } from "react-redux";
import { createTask } from "../actions";
import TaskForm from "../components/TaskForm";

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: task => {
      dispatch(createTask(task));
    }
  };
};

export default connect(null, mapDispatchToProps)(TaskForm);
