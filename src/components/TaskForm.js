import React from "react";
import { Button, Icon, Modal, Form } from "semantic-ui-react";

class TaskForm extends React.Component {
  state = {
    formDetails: {
      title: "",
      body: "",
      isCompleted: false,
      dueDate: Date.now()
    },
    showModal: false
  };

  // handle input change
  handleInputChange = e => {
    this.setState({
      ...this.state,
      formDetails: {
        ...this.state.formDetails,
        [e.target.name]: e.target.value
      }
    });
  };

  //handle datepicker change : TBD

  // handle form submit
  handleSubmit = e => {
    e.preventDefault();

    if (
      this.state.formDetails.title.trim() &&
      this.state.formDetails.body.trim()
    ) {
      this.props.onAddPost(this.state.formDetails);
      //reset form once submitted
      this.handleReset();
      this.closeModal();
    }
  };

  //handle reset form
  handleReset = () => {
    this.setState({
      ...this.state,
      formDetails: {
        ...this.state.formDetails,
        title: "",
        body: ""
      }
    });
  };

  closeModal = () => {
    this.setState({
      ...this.state,
      showModal: false
    });
  };

  render() {
    return (
      <div>
        <Modal
          as={Form}
          onSubmit={e => {
            this.handleSubmit(e);
          }}
          onClose={this.closeModal}
          open={this.state.showModal}
          closeOnEscape={true}
          closeOnDimmerClick={true}
          trigger={
            <Button
              type="buton"
              positive
              onClick={() => this.setState({ ...this.state, showModal: true })}
            >
              <Icon name="plus" /> New Task
            </Button>
          }
        >
          <Modal.Header>Create New Task</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input
                  focus
                  type="text"
                  placeholder="Enter Name"
                  name="title"
                  required
                  onChange={this.handleInputChange}
                  value={this.state.formDetails.title}
                />
              </Form.Field>
              <Form.Field>
                <label>Message</label>
                <textarea
                  cols="19"
                  rows="4"
                  placeholder="Enter Messsage"
                  name="body"
                  required
                  onChange={this.handleInputChange}
                  value={this.state.formDetails.body}
                ></textarea>
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              type="button"
              color="yellow"
              icon="undo"
              content="Reset"
              onClick={this.handleReset}
            />
            <Button type="submit" color="green" icon="save" content="Create" />
          </Modal.Actions>
        </Modal>

        {/* {JSON.stringify(this.state)} */}
      </div>
    );
  }
}

export default TaskForm;
