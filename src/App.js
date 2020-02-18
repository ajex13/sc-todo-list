import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./containers/TaskList";
import CreateTask from "./containers/CreateTask";

class App extends Component {
  render() {
    return (
    <div>
      <CreateTask/>
      <hr/>
      <TaskList/>
      </div>);
  }
}

export default App;
