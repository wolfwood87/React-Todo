import React from 'react';
import Todo from './components/TodoComponents/Todo.js';
import TodoForm from './components/TodoComponents/Todo.js'
import TodoList from './components/TodoComponents/TodoList.js'
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todo: ''
    }
  }
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm />
        </div>
        <TodoList todo={this.state.todo/>
      </div>
    );
  }
}

export default App;
