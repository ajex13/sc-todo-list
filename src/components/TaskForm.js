import React from "react";

class TaskForm extends React.Component {
  state = {
    title: "",
    body: ""
  };

  // handle input change
  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //handle datepicker change : TBD

  // handle form submit
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.title.trim() && this.state.body.trim()) {
      this.props.onAddPost(this.state);
      //reset form once submitted
      this.handleReset();
    }
  };

  //handle reset form
  handleReset = () => {
    this.setState({
      ...this.state,
      title: "",
      body: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={this.handleInputChange}
            value={this.state.title}
          />

          <textarea
            cols="19"
            rows="4"
            placeholder="Body"
            name="body"
            onChange={this.handleInputChange}
            value={this.state.body}
          ></textarea>

          <button type="submit">
            Create
          </button>
          <button
            type="button"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </form>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default TaskForm;
