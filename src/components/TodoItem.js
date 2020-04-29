import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '20px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                {/* <p>
                    <input type="checkbox" onChange={this.props.toggleState.bind(this, id)} style={checkboxStyle}/>{title}
                    <button onClick={this.props.deleteItem.bind(this, id)} style={btnStyle}>&times;</button>
                </p> */}
                <div className="item-contents">
                    <div className="checkbox"><input type="checkbox" onChange={this.props.toggleState.bind(this, id)}/></div>
                    <div className="item-title">{ title }</div>
                    <div className="btn-delete" onClick={this.props.deleteItem.bind(this, id)}><i className="fas fa-times-circle"></i></div>
                </div>
            </div>
        )
    }
}

// Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
    toggleState: PropTypes.func.isRequired
}

/* const btnStyle = {
    width: 'fit-content',
    height: 'fit-content',
    color: 'grey',
    background: 'inherit',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    padding: '5px 10px',
    fontSize: '20px'
}

const checkboxStyle = {
    display: 'inline',
    margin: '0',
    marginRight: '10px',
    width: '20px',
    height: '20px'
} */

export default TodoItem;