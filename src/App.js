import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js'
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

  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoList todos={this.state.todos} toggleTodo={this.toggleTodo}/>  
        </div>
        <TodoForm  addTodo = {this.addTodo}/>
      </div>
    );
  }
}

export default App;
