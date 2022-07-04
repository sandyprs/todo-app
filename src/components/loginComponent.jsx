import React,{Component} from "react";
import "../styles/loginStyle.css";
import AuthenticationService from "../services/AuthenticationService";
// import HelloWorldApiService from '../services/api/helloWorldApiService'


class LoginComponent extends Component{

    constructor(){
        super()
        this.state={
            userName:"sandy",
            pass:"",
            isLoginSuccessful:false,
            isLoginFailed:false
        }
        // this.handleUsernameChange = this.handleUsernameChange.bind(this)
        // this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
    }

    render(){
        return(
            <>
            <h1 style={{fontFamily:"cursive", color:"violet"}}>Welcome to TO-DO Application</h1>
            <ShowSuccessMsg isLoginSuccessful={this.state.isLoginSuccessful}/>
            <ShowInvalidMsg isLoginFailed={this.state.isLoginFailed}/>
            <div>
                <div className="container">
                    User Name :<input type="text" name="userName" className="TextClass" onChange={this.handleChange} value={this.state.userName}></input>
                </div>
                <div>
                    Password :<input type="password" name="pass" className="TextClass" onChange={this.handleChange} value={this.state.pass}></input>
                </div>
                <div>
                    <button className="btn btn-success" onClick={this.login}>Login</button>
                </div>
            </div>
            </>
        )
    }

    login(){
        // console.log("login working");
        if(this.state.userName === "sandy" && this.state.pass === "s@ndy"){
            AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.pass)
            // HelloWorldApiService.executeHelloWorldPathVarService(this.state.userName)
            // .then(
            //     response => {
            //         console.log(response);
            //     }
            // )
            this.props.navigate(`/welcome/${this.state.userName}`)
            // this.setState({isLoginSuccessful:true})
            // this.setState({isLoginFailed:false})

        }else{
            this.setState({isLoginFailed:true})
            this.setState({isLoginSuccessful:false})
        }
        
    }

    handleChange(event){
        // console.log(event.target.value);
        // console.log(event.target.name);
        this.setState(
            {[event.target.name]: event.target.value}
        )

    }

    // handleUsernameChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {userName: event.target.value}
    //     )

    // }

    // handlePasswordChange(event){
    //     console.log(event.target.value);
    //     this.setState(
    //         {pass: event.target.value}
    //     )
    // }

}

function ShowSuccessMsg(props){
    if(props.isLoginSuccessful){
        return (
            <div style={{color:"green", padding:"5px"}} >
                Login Successfull
            </div>
        )
    }

    return null

}

function ShowInvalidMsg(props){
    if(props.isLoginFailed){
        return (
            <div className="alert alert-warning" style={{color:"red", padding:"5px"}} >
                Invalid Credentials
            </div>
        )
    }
    return null
}

export default LoginComponent