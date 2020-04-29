import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NoItems extends Component {
    displayNoItems() {
        return this.props.isEmpty ? {display: 'block'} : {display: 'none'}
    }

    render() {
        return (
            <div className="no-items" style={this.displayNoItems()}>
                <p>There are no items in the list</p>
            </div>
        )
    }
}

// Prop Types
NoItems.propTypes = {
    isEmpty: PropTypes.bool.isRequired
}

export default NoItems;

