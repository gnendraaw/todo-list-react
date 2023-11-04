import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      desc: "",
    };

    this.onTodoChangeEventHandler = this.onTodoChangeEventHandler.bind(this);
    this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    this.onSubmitEventHanlder = this.onSubmitEventHanlder.bind(this);
  }

  onTodoChangeEventHandler(event) {
    const title = event.target.value;
    this.setState({ title });
  }

  onDescChangeEventHandler(event) {
    const desc = event.target.value;
    this.setState({ desc });
  }

  onSubmitEventHanlder(event) {
    event.preventDefault();

    // Add todo to list
    this.props.addTodo(this.state);
  }

  render() {
    return (
      <div className="todo-form">
        <form action="#" onSubmit={this.onSubmitEventHanlder}>
          <input
            type="text"
            placeholder="Todo..."
            value={this.state.title}
            onChange={this.onTodoChangeEventHandler}
            required
          />
          <textarea
            value={this.state.desc}
            placeholder="Description..."
            onChange={this.onDescChangeEventHandler}
            required
            rows="12"
          ></textarea>

          <button type="submit">Add Todo to list</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
