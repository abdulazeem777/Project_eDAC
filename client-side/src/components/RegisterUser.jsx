import React, { Component } from 'react';
import ViewHotelsServc from '../services/ViewHotelsServc';

class RegisterUser extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: 'NA',
            username: '',
            password: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
 
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeUserNameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    saveUser = (e) => {
        e.preventDefault();
        let user = {email: this.state.email, user_name: this.state.username, password: this.state.password};

        ViewHotelsServc.addUser(user).then(res =>{
            this.props.history.push('/');
        });

        // step 5
        // if(this.state.id === '_add'){
        //     EmployeeService.createEmployee(employee).then(res =>{
        //         this.props.history.push('/employees');
        //     });
        // }else{
        //     EmployeeService.updateEmployee(employee, this.state.id).then( res => {
        //         this.props.history.push('/employees');
        //     });
        // }
        console.log("User =>" + JSON.stringify(user));
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Register</h3>
                                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> UserName: </label>
                                            <input placeholder="User Name" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control"
                                                value={this.state.emailId} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveUser}>Register</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Back</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        );
    }
}

export default RegisterUser;