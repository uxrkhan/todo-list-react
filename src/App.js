import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Todos from './components/Todos'
import Header from './components/layout/Header'
import AddItem from './components/AddItem';
import About from './components/pages/About';
import NoItems from './components/NoItems';
import {Link} from 'react-router-dom';
import {v4 as uuid} from 'uuid';  // if does not work, try 'const uuid = require('require')'

import './App.css';

class App extends Component {
  state = {
    /*todos: [
      {
        id: uuid(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid(),
        title: 'Meeting with team',
        completed: false
      }
    ],*/
    todos: [],
    isEmpty: true
  }

  // toggle checkbox
  toggleState = (id) => {
    this.setState(
      {
        todos: this.state.todos.map(todo => {
          if (todo.id === id) {
           todo.completed = !todo.completed;
          }
          return todo;
        })
      }
    )
  } 

  // delete item
  deleteItem = (id) => {
    this.setState(
      {
        todos: [...this.state.todos.filter(todo => todo.id !== id )]
      }
    )
    if (this.state.todos.length === 1) {
      this.setState({isEmpty: true})
    }
  }

  // add item
  addItem = (title) => {
    const newItem = {
      id: uuid(),
      title: title,
      completed: false
    }
    this.setState(
      {
        todos: [...this.state.todos, newItem]
      }
    )
    if (this.state.todos.length !== 1) {
      this.setState({isEmpty: false})
    }
  }

  // clear items 
  clearAll = (e) => {
    this.setState(
      {
        todos: [],
        isEmpty: true
      }
    )
  }

  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddItem addItem={this.addItem} clearAll={this.clearAll}/>
              <NoItems isEmpty={this.state.isEmpty}/>
              <Todos todos={this.state.todos} deleteItem={this.deleteItem} toggleState={this.toggleState}/>
              <div className="footer"><Link to="/about">About</Link></div>
            </React.Fragment>
          )}/>
          <Route path="/about" component={About}/> 
          </div>
      </Router>
    );
  }
}



export default App;
