import React from "react";
import { connect } from "react-redux";
import Task from "../components/Task";
import { fetchAllTasks, deleteTask } from "../actions";

class TaskList extends React.Component {

    componentDidMount() {
        this.props.onfetchAll();
      }

render() {
    console.log('this.props',this.props);
    const { error, loading, tasks, onDelete } = this.props;
  
if (!tasks.length) {
    return <div>There are no more pending tasks.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
      {tasks.map(task => {
        return <Task task={task} onDelete={onDelete} key={task._id} />;
      })}
    </div>
  );
    }
};

const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks,
        loading: state.tasks.loading,
        error: state.tasks.error
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onfetchAll : () =>{
        dispatch(fetchAllTasks())
    }  ,
    onDelete: id => {
      dispatch(deleteTask(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
