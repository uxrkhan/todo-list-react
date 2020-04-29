import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

    render() {
        return this.props.todos.map((todo) => (
            <TodoItem 
                key={todo.id} 
                todo={todo}
                toggleState={this.props.toggleState}
                deleteItem={this.props.deleteItem}
            />
        ));
    }
}

// Prop Types
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    toggleState: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
}

export default Todos;