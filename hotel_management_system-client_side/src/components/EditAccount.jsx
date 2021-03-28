import React, { Component } from 'react';
import ViewHotelsServc from '../service/ViewHotelsServc';

class EditAccount extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: this.props.match.params.email,
            username: '',
            password: '',
            name:'',
            country:'',
            phoneno:'',
            msg:''
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCountryHandler = this.changeCountryHandler.bind(this);
        this.changePhonenoHandler = this.changePhonenoHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
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

    changeCountryHandler= (event) => {
        this.setState({country: event.target.value});
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changePhonenoHandler= (event) => {
        this.setState({phoneno: event.target.value});
    }

    componentDidMount(){
        ViewHotelsServc.getUserDetailsByEmail(this.state.email).then((resp) => {
            this.setState({username : resp.data.content.username, password: resp.data.content.password, name: resp.data.content.name, phoneno: resp.data.content.phoneno, country: resp.data.content.country})
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {email: this.state.email, username: this.state.username, password: this.state.password, name: this.state.name, country: this.state.country, phoneno: this.state.phoneno};

        ViewHotelsServc.updateUser(user).then(res =>{
            this.setState({msg: res.data.reason});
        });
        console.log("User =>" + JSON.stringify(user));
    }

    cancel(){
        this.props.history.push(`/userhome/${this.state.email}`);
    }

    render() {
        return (
            <div>
                <h3>Update Account Details</h3>
                <br></br>
                <p>{this.state.msg}</p>
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
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> UserName: </label>
                                            <input placeholder="User Name" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeUserNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Country: </label>
                                            <input placeholder="Country" name="country" className="form-control" 
                                                value={this.state.country} onChange={this.changeCountryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Mobile No.: </label>
                                            <input placeholder="Mobile no." name="phoneno" className="form-control" 
                                                value={this.state.phoneno} onChange={this.changePhonenoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control"
                                                value={this.state.emailId} onChange={this.changePasswordHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Update</button>
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

export default EditAccount;