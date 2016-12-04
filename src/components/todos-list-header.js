import React from 'react';
import TodosListHeader from './todos-list-header';

export default class TodosList extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
}
