import React from 'react';
import CreateTodo from './create-todo';
import TodosList from './todos-list';

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
                <CreateTodo createTask={this.createTask.bind(this)} />
                <TodosList todos={this.state.todos} toggleTask={this.toggleTask.bind(this)} />
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
        const foundTodo = this.state.todos.filter(todo => todo.task === task)[0];
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }
}
