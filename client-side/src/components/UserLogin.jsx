import React, { Component } from 'react';
import ViewHotelsServc from '../services/ViewHotelsServc';

class UserLogin extends Component {


    constructor(props) {
        super(props)

        this.state = {
            email: 'NA',
            username: '',
            password: ''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    loginUser = (e) => {
        e.preventDefault();
        ViewHotelsServc.userLogin(this.state.email, this.state.password).then(res => {
            this.setState({username: res.data});
            console.log("Username =>"+ JSON.stringify(this.state.username));
            if(this.state.username === "")
            {
                this.props.history.push('/');
            }
            else
            {
                this.props.history.push(`/userhome/${this.state.email}/${this.state.username}/${this.state.password}`);
            }
        });
    }

    cancel(){
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3>Log In</h3>
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
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control"
                                                value={this.state.emailId} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.loginUser}>LogIn</button>
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

export default UserLogin;