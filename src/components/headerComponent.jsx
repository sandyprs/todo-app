import React,{Component} from "react";
import {Link} from 'react-router-dom';
import AuthenticationService from "../services/AuthenticationService";


class HeaderComponent extends Component{
    render(){
        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div className="navbar-brand">SSDimenssion</div>
                    <ul className="navbar-nav">
                        {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to="/welcome/Anonymous">HOME</Link></li>}
                        {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to="/todos">TO-DOs</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {AuthenticationService.isUserLoggedIn() && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.clearAuthTokens}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }

}

export default HeaderComponent