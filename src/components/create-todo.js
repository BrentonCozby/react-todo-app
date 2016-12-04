import React from 'react';

export default class CreateTodo extends React.Component {
    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div className="input-group">
                    <input className="form-control" type='text' ref="createInput" placeholder="What do I need to do?" />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
                    </span>
                </div>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        this.props.createTask( this.refs.createInput.value );
        this.refs.createInput.value = "";
    }
}
