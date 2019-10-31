// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
    return (
        <div>
            {props.todos.map((item, index) => (
                <Todo
                    key={index}
                    todo={item}
                    toggleTodo={props.toggleTodo}
                />
            ))}
            
        </div>
    )
}

export default TodoList;