import React from 'react';
import TodoItem from './TodoItem';
import propTypes from 'prop-types';


class Todos extends React.Component {



  render(){
    return this.props.todos.map((todo) => (
      <TodoItem todo={todo} key={todo.id} markComplete={this.props.markComplete} delTodo = {this.props.delTodo}/>
    ))

  }
}

//prop types
Todos.propTypes = {
  todos: propTypes.array.isRequired
}

export default Todos;