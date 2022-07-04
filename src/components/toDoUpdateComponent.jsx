import React,{Component} from "react";
import moment from "moment";
import { Form, Formik,Field,ErrorMessage } from "formik";
import AuthenticationService from "../services/AuthenticationService";
import ToDoApiService from "../services/api/toDoApiService"

class ToDoUpdateComponent extends Component{

    constructor(props){
        super(props)
        // console.log(this.props.params.id);
        this.state = {
            id:this.props.params.id,
            description:"",
            isCompleted:"",
            targetDate:moment(new Date()).format("YYYY-MM-DD")
        }

        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        if(this.state.id !== -1){
            let user = AuthenticationService.getLoggedInUserName()
            ToDoApiService.executeGetToDoService(user, this.state.id)
            .then(
                response => {
                    // console.log(response.data);
                    this.setState(
                        {
                            description: response.data.desc,
                            targetDate: moment(response.data.targetDate).format("YYYY-MM-DD"),
                            isCompleted:response.data.isCompleted

                        }
                    )
                }
            )
        }
    }

    onSubmit(values){
        // console.log(values);
        let user = AuthenticationService.getLoggedInUserName()
        // console.log(this.state.description);
        if(this.state.id !== -1){
                ToDoApiService.executeUpdateToDosService(user,this.state.id,{
                id:this.state.id,
                userName:user,
                desc:values.description,
                isCompleted:values.isCompleted,
                targetDate:values.targetDate
            }).then(
                this.props.navigate(`/todos`)
            )
        }else{
            ToDoApiService.executeInsertToDosService(user,{
                id:this.state.id,
                userName:user,
                desc:values.description,
                isCompleted:values.isCompleted,
                targetDate:values.targetDate
            }).then(
                this.props.navigate(`/todos`)
            )
        }

    }

    validate(values){
        let validationErrors = {}
        if(!values.description){
            validationErrors.description = "Please enter description"
        }else if(values.description.length <5){
            validationErrors.description = "Please enter atleast 5 characters in description"
        }

        if(!moment(values.targetDate).isValid){
            validationErrors.targetDate = "Please provide valid Target Date"
        }

        if(!values.isCompleted){
            validationErrors.isCompleted = "Please enter target completed or not"
        }
        return validationErrors
    }

    render(){
        let description = this.state.description
        let isCompleted = this.state.isCompleted
        let targetDate = this.state.targetDate
        return(
            <div className="container">
                <h1>TODO</h1>
               <Formik
                    initialValues={{description,targetDate,isCompleted}}
                    onSubmit={this.onSubmit}
                    validate={this.validate}
                    validateOnBlur={false}
                    validateOnChange={false}
                    enableReinitialize={true}
               >
                {
                    (props) =>(
                        <Form>
                            <ErrorMessage name="description" component="div" className="alert alert-warning"></ErrorMessage>
                            <ErrorMessage name="targetDate" component="div" className="alert alert-warning"></ErrorMessage>
                            <ErrorMessage name="isCompleted" component="div" className="alert alert-warning"></ErrorMessage>
                            <fieldset className="form-group" >
                                <label>Description</label>
                                <Field className="form-control" type="text" name="description"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label htmlFor="">Target Date</label>
                                <Field className="form-control" type="date" name="targetDate"></Field>
                            </fieldset>
                            <fieldset className="form-group">
                                <label htmlFor="">Is Completed?</label>
                                <Field className="form-control" type="text" name="isCompleted"></Field>
                            </fieldset>
                            <button type="submit" className="btn btn-success">Save</button>

                        </Form>
                    ) 

                }
                </Formik> 

            </div>

        )
    }

}

export default ToDoUpdateComponent