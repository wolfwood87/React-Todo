import React from 'react';

import TodoList from './components/TodoComponents/TodoList.js'
import './App.css';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  toggleTodo = todoName => {
    this.setState({
      todos: this.state.todos.map(todoItem => {
        if (todoItem.id === todoName) {
          return{
            ...todoItem,
            completed: !todoItem.completed
          }
        }
        return todoItem;
        })
      });
  }
  addTodo = (todoName) => {
    this.setState({
      todos: [
        ...this.state.todos, 
        {
          name: todoName,
          id: new Date(),
          completed: false
        }
      ]
    });
  };
  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todoItem => {
        return !todoItem.completed;
      })
    });
  };
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo} addTodo = {this.addTodo} clearCompleted={this.clearCompleted}/>  
        </div>
        
      </div>
    );
  }
}

export default App;
