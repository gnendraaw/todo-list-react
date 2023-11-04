import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
    };

    this.onTodoChangeEventHandler = this.onTodoChangeEventHandler.bind(this);
    this.onSubmitEventHanlder = this.onSubmitEventHanlder.bind(this);
  }

  onTodoChangeEventHandler(event) {
    const title = event.target.value;
    this.setState({ title });
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

          <button type="submit">Add Todo to list</button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
