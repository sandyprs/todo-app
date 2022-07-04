import React,{Component} from "react";
import "../styles/welcomeStyle.css";
import {Link} from 'react-router-dom';
// import HelloWorldApiService from '../services/api/helloWorldApiService'

class WelcomeComponent extends Component{

    constructor(props){
        super(props)
        this.state = {
            msg:""
        }

        // this.callHelloworldApi = this.callHelloworldApi.bind(this)
    }

    render(){
        return (
            <>
                <h1>Welcome Page</h1>
                <h4>Hello {this.props.params.user}.</h4>
                <span>You can check your todos <Link to="/todos">here</Link>.</span>
                <div>Get message from web service by clicking below</div>
                {/* <button className="btn btn-success" onClick={this.callHelloworldApi}>Click here</button> */}
                {/* <div><span>{this.state.msg}</span></div> */}
            </>
        )
    }

    // callHelloworldApi(){
    //     // console.log("Calling APi");
    //     // HelloWorldApiService.executeHelloWorldService()
    //     // .then(
    //     //     response => {
    //     //         this.setState(
    //     //             {
    //     //                 msg:response.data
    //     //             }
    //     //         )
    //     //     }
    //     // )

    //     HelloWorldApiService.executeHelloWorldBeanService()
    //     .then(
    //         response => {
    //             this.setState(
    //                 {
    //                     msg: response.data.name
    //                 }
    //             )
    //         } 
    //     )

       
    // }
}

export default WelcomeComponent