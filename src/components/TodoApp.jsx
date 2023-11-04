import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { getTodos } from "../utils";

class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: getTodos(),
    };

    this.onAddTodoToListHandler = this.onAddTodoToListHandler.bind(this);
    this.onMarkDoneHandler = this.onMarkDoneHandler.bind(this);
    this.onToggleDoneHandler = this.onToggleDoneHandler.bind(this);
    this.onDeleteTodoHandler = this.onDeleteTodoHandler.bind(this);
  }

  onAddTodoToListHandler({ title }) {
    const todoObject = {
      id: +new Date(),
      title,
    };

    this.setState((prevState) => {
      return {
        todos: [...prevState.todos, todoObject],
      };
    });
  }

  onMarkDoneHandler(id) {
    const todos = this.state.todos;
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].isDone = true;

    this.setState({ todos });
  }

  onToggleDoneHandler(id) {
    // Toggle done and revert todo
  }

  onDeleteTodoHandler(id) {
    const todos = this.state.todos.filter((todo) => todo.id !== id);
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todo-app">
        <TodoForm addTodo={this.onAddTodoToListHandler} />
        <TodoList
          category="To do"
          todos={this.state.todos.filter((todo) => !todo.isDone)}
          markDone={this.onMarkDoneHandler}
          deleteTodo={this.onDeleteTodoHandler}
        />

        <TodoList
          category="Done"
          todos={this.state.todos.filter((todo) => todo.isDone)}
          markDone={this.onMarkDoneHandler}
          deleteTodo={this.onDeleteTodoHandler}
        />
      </div>
    );
  }
}

export default TodoApp;
