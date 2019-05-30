import React, { Component } from "react";
import Header from './components/layout/Header';
import Todos from "./components/Todos";
import { directive } from "@babel/types";
class App extends Component {
    state = {
        todos: [
            { id: 1, title: "take out the trash", completed: false },
            { id: 2, title: "dinner with wife", completed: false },
            { id: 3, title: "meeting with boss", completed: false }
        ]
    };
    // Toggle Complete
    
    markComplete = (id) => {
        this.setState({ todos: this.state.todos.map(todo=>{
            if(todo.id === id){
                todo.completed = !todo.completed
            }
            return todo;
        })})
    };
    // Delete todo
    delTodo = (id)=>{
        this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]});
    }
    render() {
        console.log(this.state.todos);
        return (
            <div>
                <Header />
                <Todos delTodo={this.delTodo} markComplete={this.markComplete} todos={this.state.todos} />
            </div>
            
        );
    }
}

export default App;
