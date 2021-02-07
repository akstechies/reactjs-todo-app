import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from 'uuid';

//function App() {

    class App extends Component {


    //React.state = {
        state = {
        todos: [
            {
                id: uuid(),
                title: 'task 1',
                completed: false
            },
            {
                id: uuid(),
                title: '2 task',
                completed: true
            },
            {
                id: uuid(),
                title: 'last task',
                completed: false
            },
        ]
    }

    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo => {
            if(todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }) })
    }

    delTodo = (id) => {
        this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id) ]
        }) }

    addTodo = (title) => {
        //console.log(title)

        const newTodo = {
            id: uuid(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo ]});
         
    }
    
    
    render() {
    //console.log(React.state.todos[0])
    //console.log(this.state.todos[0])
  return (
<Router>
    <div className="App">
        <Header />

        

        <AddTodo addTodo={this.addTodo} />
        
      <Todos todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo} />
    </div>
    </Router>
  );
  
}
}

export default App;
