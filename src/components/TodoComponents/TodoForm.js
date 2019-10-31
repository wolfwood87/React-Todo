import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: ''
        };
    }

    render() {
        console.log('this is a form')
        return (
            <form>
                <input
                    type="text"
                    name="todo"
                />
                <button>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;