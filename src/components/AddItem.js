import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddItem extends Component {
    state = {
        titleField: ''
    }

    onChange = (e) => {
        // this.setState({ titleField: e.target.value });
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.titleField);
        this.setState({ titleField: '' });
    } 
    
    onClear = (e) => {
        this.props.clearAll();
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display: 'flex'}} autoComplete="off">
                <input 
                    type="text" 
                    name="titleField" 
                    placeholder="Add Item..." 
                    style={{flex: '10', padding: '5px'}} 
                    value={this.state.titleField}
                    onChange={this.onChange}
                />
                <input type="submit" value="Submit" className="btn" style={{flex: '1'}}/>
                <input type="button" onClick={this.onClear} value="Clear" className="btn btn-red" style={{flex: '1',}}/>                                  
            </form>
        )
    }
}


// PropTypes
AddItem.propTypes = {
    addItem: PropTypes.func.isRequired,
    clearAll: PropTypes.func.isRequired
}

export default AddItem;