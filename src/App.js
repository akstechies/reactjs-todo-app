import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/layout/Header'
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import {v4 as uuid} from 'uuid';
import axios from "axios";

//function App() {

    class App extends Component {


    //React.state = {
        state = {
            todos: []
        }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(res => this.setState({ todos: res.data }) )
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

        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id) ]}));

        /*this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id) ]
        })*/ }

    addTodo = (title) => {
        //console.log(title)

        /*const newTodo = {
            id: uuid(),
            title,
            completed: false
        }
        this.setState({ todos: [...this.state.todos, newTodo ]});
        */

        axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        })
            .then(res => this.setState({ todos: [...this.state.todos, res.data ]}));
        
         
    }
    
    
    render() {
    //console.log(React.state.todos[0])
    //console.log(this.state.todos[0])
  return (
<Router>
    <div className="App">
        <Header />

        <Route exact path="/" render={props => (
            <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={ this.state.todos } markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
        )} />

        <Route path="/about" component={About} />

        
    </div>
    </Router>
  );
  
}
}

export default App;
