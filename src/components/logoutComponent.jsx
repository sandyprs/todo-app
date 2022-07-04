import React,{Component} from "react";
// import AuthenticationService from "../services/AuthenticationService";

class LogoutComponent extends Component{
    render(){
        // new AuthenticationService().clearAuthTokens()
        return(
            <>
                <h1>You are logged out</h1>
                <h2>Thank you for using our application</h2>
            </>
        )
    }
}
export default LogoutComponent