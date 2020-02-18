import React from "react";
import { connect } from "react-redux";
import Task from "../components/Task";
import { fetchAllTasks, deleteTask, completeTask } from "../actions";
import { Button, Icon, List } from 'semantic-ui-react'

class TaskList extends React.Component {
  componentDidMount() {
    this.props.onfetchAll();
  }

  render() {
    console.log("this.props", this.props);
    const { error, loading, tasks, onDelete, onComplete } = this.props;

    if (!tasks.length) {
      return <div>No tasks found.</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
            <List divided verticalAlign='middle'>
            {tasks.map(task => {
          return <List.Item><Task task={task} onDelete={onDelete} onComplete={onComplete} key={task._id} /></List.Item>;
        })}
            </List>

      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('state',state);
  return {
    tasks: state.tasks.tasks,
    loading: state.tasks.loading,
    error: state.tasks.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onfetchAll: () => {
      dispatch(fetchAllTasks());
    },
    onDelete: id => {
      dispatch(deleteTask(id));
    },
    onComplete: id => {
        dispatch(completeTask(id));
      }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
