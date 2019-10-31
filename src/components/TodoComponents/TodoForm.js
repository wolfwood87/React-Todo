import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todoName: ''
        };
    }
    handleChanges = e => {
        this.setState({
            todoName: e.target.value
        })
    }
    submit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoName);
        this.setState({
            todoName: ''
        });
    };
    render() {
        console.log('this is a form')
        return (
            <div>
            <form onSubmit={this.submit}>
                <input
                    onChange={this.handleChanges}
                    type="text"
                    name="todo"
                    value={this.state.todoName}
                />
                <button>Add Todo</button>
            </form>
                <button>Clear Completed</button>
            </div>
        )
    }
}

export default TodoForm;