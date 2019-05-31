import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

import uuid from "uuid";
import "./App.css";
class App extends Component {
    state = {
        todos: [
            { id: 1, title: "take out the trash", completed: false },
            { id: 2, title: "dinner with wife", completed: false },
            { id: 3, title: "meeting with boss", completed: false }
        ]
    };
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
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };

    // Add Todo
    addTodo = title => {
        const newTodo = {
            id: uuid.v4(),
            title: title,
            completed: false
        };
        this.setState({ todos: [...this.state.todos, newTodo] });
    };
    render() {
        console.log(this.state.todos);
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                        delTodo={this.delTodo}
                        markComplete={this.markComplete}
                        todos={this.state.todos}
                    />
                </div>
            </div>
        );
    }
}

export default App;
