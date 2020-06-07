import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

export default class TodoList extends Component {
  static defaultProps = {
    todos: [],
  };

  render() {
    const { todos } = this.props;
    return (
      <ListGroup className="mb-2">
        <ListGroup.Item active>待办事项</ListGroup.Item>
        {todos.map((todo) => (
          <ListGroup.Item key={todo.key}>{todo.content}</ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
}
