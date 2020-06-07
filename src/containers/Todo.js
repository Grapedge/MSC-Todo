import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import './Todo.css';

export default class Todo extends Component {
  state = {
    todos: [],
    form: {
      todo: '',
    },
  };

  key = 0;

  onInputChange = (event) => {
    const { name, value } = event.target;
    // 如果你打算判断的是checkbox，注意进行判断！
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  addTodo = () => {
    const content = this.state.form.todo;
    const todos = [...this.state.todos];
    todos.push({
      key: this.key++,
      content,
    });
    this.setState({
      todos,
      form: {
        ...this.state.form,
        todo: '',
      },
    });
  };

  render() {
    return (
      <div className="todo">
        <InputGroup className="mb-3">
          <FormControl
            name="todo"
            placeholder="Input todo here..."
            value={this.state.form.todo}
            onChange={this.onInputChange}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={this.addTodo}>
              添加
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
