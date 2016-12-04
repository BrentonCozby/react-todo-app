import React from 'react';

export default class CreateTodo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if(!this.state.error) return null;
        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)} id='addTask'>
                <div className="input-group">
                    <input className="form-control" type='text' ref="createInput" placeholder="What do I need to do?" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                    </span>
                </div>
                {this.renderError()}
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput   = this.refs.createInput;
        const task          = createInput.value;
        const validateInput = this.validateInput(task);

        if(validateInput) {
            this.setState({ error: validateInput });
            return false;
        }

        this.setState({ error: null });
        this.props.createTask( task );
        createInput.value = "";
    }

    validateInput(task) {
        if(!task) return `please enter a task`;
        if(_find(this.props.todos, 'task', task)) return `task already exists.`;
        return null;
    }
};

function _find(array, objProp, value) {
    for(let i = 0, x = array.length; i < x; i++) {
        if(array[i][objProp] === value) {
            return true;
        }
    }
}
