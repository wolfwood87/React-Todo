// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';
import TodoForm from '../../components/TodoComponents/TodoForm.js';
import '../../App.css'
class TodoList extends React.Component {
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
    render(){
    return (
        <div className="todo-card">
            <h3>Note</h3>
            
            {this.state.todos.map((item, index) => (
                <Todo
                    key={index}
                    todo={item}
                    toggleTodo={this.toggleTodo}
                />
                
                
            ))}
            <TodoForm  addTodo = {this.addTodo} clearCompleted={this.clearCompleted}/>
        </div>
    )
}
}
export default TodoList;