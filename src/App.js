import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Todos from './components/todo';
import Header from './components/layout/header';
import Submit from './components/Submit';
import uuid from 'uuid';
import About from './components/pages/about';



class App extends React.Component {
  state = {
    todos: [

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
      <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Submit Submit={this.Submit}/>
            <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
          </React.Fragment>
        
        )}/>

        <Route path="/about" component={About}/>

      </div>
      </Router>
    );
  }
}

export default App;
