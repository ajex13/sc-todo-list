import React from "react";
import { connect } from "react-redux";
import Task from "../components/Task";
import { fetchAllTasks, deleteTask, completeTask } from "../actions";
import { List } from 'semantic-ui-react'
import { orderBy } from 'lodash';

class TaskList extends React.Component {
  componentDidMount() {
    this.props.onfetchAll();
  }

  render() {
    // console.log("this.props", this.props);
    const { error, loading, tasks, onDelete, onComplete } = this.props;
    const sortedTasks = orderBy(tasks, function(dateObj) {
        return new Date(dateObj.dueDate);
      })
    if (!tasks.length) {
      return <div>No tasks found.</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
            <List divided verticalAlign='middle'>
            {sortedTasks.map(task => {
          return <List.Item><Task task={task} onDelete={onDelete} onComplete={onComplete} key={task._id} /></List.Item>;
        })}
            </List>

      </div>
    );
  }
}

const mapStateToProps = state => {
//   console.log('state',state);
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
