import React from 'react';

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    renderActionsSection() {
        if(this.state.isEditing) {
            return (
                <td className="taskButtonsCell">
                    <button className="btn btn-default btn-sm" onClick={this.onSaveClick.bind(this)}><span className="glyphicon glyphicon-ok" aria-hidden="true"></span></button>
                    <button className="btn btn-default btn-sm" onClick={this.onCancelClick.bind(this)}><span className="glyphicon glyphicon-remove" aria-hidden="true"></span></button>
                </td>
            );
        }

        return (
            <td className="taskButtonsCell">
                <button className="btn btn-default btn-sm" onClick={this.onEditClick.bind(this)}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span></button>
                <button className="btn btn-default btn-sm" onClick={this.props.deleteTask.bind(this, this.props.task)}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
            </td>
        );
    }

    renderTaskSection() {
        const {task, isCompleted} = this.props;
        const taskStyle = {
            textDecoration: isCompleted ? 'line-through' : 'none',
            cursor: 'pointer',
            color: isCompleted ? '#bbb' : '#000'
        };

        if(this.state.isEditing) {
            return (
                <td>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input className="form-control" type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
        }

        return (
            <td style={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>{task}</td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionsSection()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;

        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
