import React, { Component } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./containers/TaskList";
import CreateTask from "./containers/CreateTask";
import { Icon, Header, Container, Segment } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <div style={{minHeight: "40px"}}></div>
          <div style={{  width: '800px' , margin: 'auto' }}>
            <Header as="h2" icon textAlign="center">
              <Icon name="check" circular />
              <Header.Content>Simple todo list</Header.Content>
            </Header>
              <CreateTask />
            <Segment>
              <div  style={{ margin: "40px"}}>
                <TaskList />
              </div>
            </Segment>

          </div>
        </Container>
      </div>
    );
  }
}

export default App;
