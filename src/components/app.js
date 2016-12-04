import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';
import _ from 'lodash';

const todos = [
    {
        task: `cook the chicken wings nicely`,
        isCompleted: false
    },
    {
        task: 'workout',
        isCompleted: true
    }
];

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos
        };
    }

    render() {
        return (
            <div className="container">
                <h1>React ToDo App</h1>
                <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)} />
                <TodosList
                    todos={this.state.todos}
                    toggleTask={this.toggleTask.bind(this)}
                    saveTask={this.saveTask.bind(this)}
                    deleteTask={this.deleteTask.bind(this)}
                />
            </div>
        );
    }

    createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false
        });

        this.setState({ todos: this.state.todos });
    }

    toggleTask(task) {
        var refToFoundTodo = _find(this.state.todos, 'task', task);
        refToFoundTodo.isCompleted = !refToFoundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask) {
        var refToFoundTodo = _find(this.state.todos, 'task', oldTask);
        refToFoundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(task) {
        _remove(this.state.todos, 'task', task);
        this.setState({ todos: this.state.todos });
    }
};

function _find(array, objProp, value) {
    for(let i = 0, x = array.length; i < x; i++) {
        if(array[i][objProp] === value) {
            return array[i];
        }
    }
}

function _remove(array, objProp, value) {
    for(let i = 0, x = array.length; i < x; i++) {
        if(array[i][objProp] === value) {
            return array.splice(i, 1);
        }
    }
}
