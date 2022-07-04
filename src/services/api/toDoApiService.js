import axios from "axios"
import UrlConstants from "../../constants/urlConstants"

class ToDoApiService{
    executeGetAllToDosService(user){
        // console.log("Hello executed");
        let url = UrlConstants.findAllTodos.replace("{user}",user)
        // console.log(url);
        return axios.get(url)
    }

    executeDeleteToDosService(user,id){
        // console.log("Hello executed");
        let url = UrlConstants.deleteTodo.replace("{user}",user)
        url = UrlConstants.deleteTodo.replace("{id}",id)
        // console.log(url);
        return axios.delete(url)
    }

    executeUpdateToDosService(user,id,todo){
        // return("Hello executed")
        let url = UrlConstants.updateTodo.replace("{user}",user)
        url = UrlConstants.updateTodo.replace("{id}",id)
        // console.log(url);
        return axios.put(url,todo)
    }

    executeInsertToDosService(user,todo){
        // return("Hello executed")
        let url = UrlConstants.updateTodo.replace("{user}",user)
        // console.log(url);
        return axios.push(url,todo)
    }

    executeGetToDoService(user,id){
        // return("Hello executed")
        let url = UrlConstants.findTodo.replace("{user}",user)
        url = UrlConstants.findTodo.replace("{id}",id)
        // console.log(url);
        return axios.get(url)
    }


}

export default new ToDoApiService()