import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import "./TodoList.css";


class TodoList extends Component {
    constructor(props) {
        console.log("INSIDE CONSTRUCTOR");
        super(props);
        this.state = {
            todos: [],
        };
        this.create = this.create.bind(this);
        this.remove = this.remove.bind(this);
        this.update = this.update.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }
    create(newTodo) {
        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }
    remove(id) {
        this.setState({
            todos: this.state.todos.filter((t) => t.id !== id)
        });
    }

    componentDidMount() {
        console.log("INSIDE COMPONENT DID MOUNT");


        // load data
        // axios.get("https://api.github.com/zen").then((response) => {
        //     setTimeout(
        //         function () {
        //             this.setState({ quote: response.data, isLoaded: true })
        //         }.bind(this),
        //         3000
        //     );
        // });
        // set State with their data
    }


    componentDidUpdate(prevProps, prevState) {
        console.log("INSIDE COMPONENT DID UPDATE");
        console.log(prevState.todos);
        console.log(this.state.todos);
    }
    update(id, updatedTask) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, task: updatedTask };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }
    render() {

        console.log("INSIDE RENDER");


        const todos = this.state.todos.map((todo) => {
            return (
                <Todo
                    key={todo.id}
                    id={todo.id}
                    task={todo.task}
                    completed={todo.completed}
                    removeTodo={this.remove}
                    updateTodo={this.update}
                    toggleTodo={this.toggleCompletion}
                />
            );
        });
        return (
            <div className='TodoList'>
                <h1>
                    Todo List! <span>An Simple React Todo List App.</span>
                </h1>
                <ul>{todos}</ul>
                <NewTodoForm createTodo={this.create} />
            </div>
        );
    }
}
export default TodoList;
