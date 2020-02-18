import { connect } from 'react-redux';
import { createTask } from '../actions';
import TaskForm from '../components/TaskForm';

const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => {
      dispatch(createTask(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TaskForm);