import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
    state = {
        title: ""
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: "" });
    };

    onChange = event =>
        this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add Todo ..."
                    style={{ flex: "10", padding: "5px" }}
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: "1" }}
                />
            </form>
        );
    }
}

// PropTypes
AddTodo.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

export default AddTodo;
