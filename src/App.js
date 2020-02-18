import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./containers/TaskList";
import CreateTask from "./containers/CreateTask";
import { Icon, Header, Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <div style={{ marginTop: "40px" }}>
            <Header as="h2" icon textAlign="center">
              <Icon name="check" circular />
              <Header.Content>Simple todo list</Header.Content>
            </Header>
            <CreateTask />

            <TaskList />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
