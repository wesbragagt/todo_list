import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from "react";

// Components
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";

// Packages
import uuid from "uuid";
import axios from "axios";
// Style Sheets
import "./App.css";

// ------------------------------------------------------------------------------------------------------------------------------------
class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        axios
            .get("https://jsonplaceholder.typicode.com/todos?_limit=2")
            .then(response => {
                this.setState({ todos: response.data });
            });
    }
    // Toggle Complete

    markComplete = id => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };
    // Delete todo
    delTodo = id => {
        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => {
                this.setState({
                    todos: [...this.state.todos.filter(todo => todo.id !== id)]
                });
            });
    };

    // Add Todo
    addTodo = title => {
        axios
            .post("https://jsonplaceholder.typicode.com/todos", {
                title: title,
                completed: false
            })
            .then(response => {
                this.setState({ todos: [...this.state.todos, response.data] });
            });
    };
    render() {
        console.log(this.state.todos);
        return (
            <Router>
                <div className="App">
                    <div className="container-fluid">
                        <Header />
                        <Route
                            exact
                            path="/"
                            render={props => (
                                <React.Fragment>
                                    <AddTodo addTodo={this.addTodo} />
                                    <Todos
                                        delTodo={this.delTodo}
                                        markComplete={this.markComplete}
                                        todos={this.state.todos}
                                    />
                                </React.Fragment>
                            )}
                        />
                        <Route path="/about" component={About} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
