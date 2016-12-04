import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';

export default class TodosList extends React.Component {
    renderItems() {
        const props = {};

        for(let prop in this.props) {
            if(this.props.hasOwnProperty(prop)) {
                if(prop !== 'todos') props[prop] = this.props[prop];
            }
        }

        return this.props.todos.map((todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            // <div className="table-responsive">
                <table className="table">
                    <TodosListHeader />
                    <tbody>{this.renderItems()}</tbody>
                </table>
            // </div>
        );
    }
}
