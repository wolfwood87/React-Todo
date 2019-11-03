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
            </form>
                <div >
                    <button className="buttons" onClick={this.submit}>Add Todo</button>
                    <button className="buttons" onClick={this.props.clearCompleted}>Clear Completed</button>
                </div>
            </div>
        )
    }
}

export default TodoForm;