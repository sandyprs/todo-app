import React, { Component } from "react";
import AuthenticationService from "../services/AuthenticationService";
import ToDoApiService from "../services/api/toDoApiService";
import moment from "moment";


class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [
                // { id: 1, dec: "Master on React" },
                // { id: 2, dec: "Master on Flutter" },
                // { id: 3, dec: "Master on JS" },
            ]
        }

        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)

    }

    componentDidMount(){
        let user = AuthenticationService.getLoggedInUserName()
        ToDoApiService.executeGetAllToDosService(user)
        .then(
            response => {
                // console.log(response.data);
                this.setState(
                    {todos: response.data}
                )
            }
        )

    }

    deleteTodo(id){
        let user = AuthenticationService.getLoggedInUserName()
        ToDoApiService.executeDeleteToDosService(user, id)
        .then(
            response => {
                // console.log(response.data);
                this.setState(
                    {todos: response.data}
                )
            }
        )
    }

    updateTodo(id){
        this.props.navigate(`/todos/update/${id}`)
        // let user = AuthenticationService.getLoggedInUserName()

        // console.log(ToDoApiService.executeUpdateToDosService(user, id))

        // ToDoApiService.executeUpdateToDosService(user, id)
        // .then(
        //     response => {
        //         console.log(response.data);
        //         // this.setState(
        //         //     {todos: response.data}
        //         // )
        //     }
        // )
    }

    addTodo(){
        this.props.navigate(`/todos/update/-1`)
    }

    render() {
        return (
            <div>
                <h1 style={{color:"blue"}}>List of To-Do</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>is Completed?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.desc}</td>
                                            <td>{todo.isCompleted}</td>
                                            <td>{moment(todo.targetDate).format("YYYY-MM-YY")}</td>
                                            <td>{<button className="btn btn-warning" onClick={()=>this.updateTodo(todo.id)}>Update</button>}</td>
                                            <td>{<button className="btn btn-danger" onClick={()=>this.deleteTodo(todo.id)}>Delete</button>}</td>
                                        </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

                <div>
                    <button className="btn btn-success" onClick={this.addTodo}>Add</button>
                </div>

            </div>
        )
    }
}

export default TodoComponent