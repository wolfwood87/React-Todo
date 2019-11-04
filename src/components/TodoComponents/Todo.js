import React from 'react';

const Todo = props => {

    const handleClick = e => {
        props.toggleTodo(props.todo.id)
    };
    return (
        <div onClick={handleClick} className={`${props.todo.completed ? 'completed' : 'not-completed'} todo-item`}>
            <p>{props.todo.name}</p>
        </div>
    )
}

export default Todo;