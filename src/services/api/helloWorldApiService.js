import axios from "axios"

class HelloWorldApiService{
    executeHelloWorldService(){
        // console.log("Hello executed");
        return axios.get("http://localhost:8080/hello-world")
    }

    executeHelloWorldBeanService(){
        // console.log("Hello executed");
        return axios.get("http://localhost:8080/hello-world-bean")
    }
    executeHelloWorldPathVarService(username){
        // console.log("Hello executed");
        return axios.get(`http://localhost:8080/hello-world-bean/${username}`)
    }

}

export default new HelloWorldApiService()