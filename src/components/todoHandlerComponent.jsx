import React,{Component} from "react";
import LoginComponent from './loginComponent';
import WelcomeComponent from './welcomeComponent';
import TodoComponent from './todoComponent';
import ErrorComponent from './errorComponent';
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom';
import withNavigation from "../utility/withNavigation";
import withParams from "../utility/withParams";
import HeaderComponent from "./headerComponent";
import FooterComponent from "./footerComponent";
import LogoutComponent from "./logoutComponent";
import AuthenticatedRoute from "../services/AuthenticatedRoute";
import ToDoUpdateComponent from "./toDoUpdateComponent";

class TodoHandlerComponent extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent)
        const TodoComponentWithNavigation = withNavigation(TodoComponent)
        const ToDoUpdateComponentWithNavigation = withNavigation(ToDoUpdateComponent)
        const HeaderComponenttWithNavigation = withNavigation(HeaderComponent)
        const WelcomeComponentWithParams = withParams(WelcomeComponent)
        const ToDoUpdateComponentWithParams = withParams(ToDoUpdateComponentWithNavigation)
        return(
            
            <Router>
                <HeaderComponenttWithNavigation/>
                <Routes>
                    <Route path="/" element={<LoginComponentWithNavigation />}/>
                    <Route path="/login" element={<LoginComponentWithNavigation />}/>
                    <Route path="/logout" element={<AuthenticatedRoute><LogoutComponent /></AuthenticatedRoute>}/>
                    <Route path="/welcome/:user" element={<AuthenticatedRoute><WelcomeComponentWithParams /></AuthenticatedRoute>}/>
                    <Route path="/todos" element={<AuthenticatedRoute><TodoComponentWithNavigation /></AuthenticatedRoute>}/>
                    <Route path="/todos/update/:id" element={<AuthenticatedRoute><ToDoUpdateComponentWithParams /></AuthenticatedRoute>}/>
                    <Route path="*" element={<ErrorComponent />}/>
                
                </Routes>
                <FooterComponent/>
            </Router>
                
            
        )
    }
}

export default TodoHandlerComponent