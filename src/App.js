import React from 'react';
import Todos from './components/todo';
import Header from './components/layout/header';
import Submit from './components/Submit';
import uuid from 'uuid;'


class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: `take out the trash`,
        completed: false
      },
      {
        id: uuid.v4(),
        title: `have dinner`,
        completed: false
      },
      {
        id: uuid.v4(),
        title: `meeting with boss`,
        completed: false
      }
    ]
  }

  delTodo = (id) =>{
    this.setState({todos:[...this.state.todos.filter(todos => todos.id !== id)]});
    console.log(id);
  }

  markComplete = (id) =>{
      this.setState ({todos: this.state.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      })});
  }

  Submit = (title) =>{
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Submit Submit={this.Submit}/>
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
      </div>
    );
  }
}

export default App;
