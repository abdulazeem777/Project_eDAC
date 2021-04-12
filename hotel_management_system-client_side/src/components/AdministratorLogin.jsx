import React, { Component } from 'react';

class AdministratorLogin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            admin : '',
            password: '',
            msg: ''
        }
        this.changeAdminuHandler = this.changeAdminuHandler.bind(this);
        this.changeAdminpHandler = this.changeAdminpHandler.bind(this);
        this.loginAdmin = this.loginAdmin.bind(this);
    }

    cancel(){
        this.props.history.push('/');
    }

    changeAdminuHandler= (event) => {
        this.setState({admin: event.target.value});
    }

    changeAdminpHandler= (event) => {
        this.setState({password: event.target.value});
    }

    loginAdmin(){
        if(this.state.admin === 'Admin1' && this.state.password === '123456')
        {
            this.props.history.push('/viewhotels');
        }
        else{
            //this.props.history.push('/');
            this.setState({msg : 'Youre Not the Administrator... Please Login as a User or if youre New, Register!!!!'});
        }
    }

    render() {
        return (
            <div>
                <h3>Administrator</h3>
                <h3>Log In</h3>
                <br></br>
                <p id="demo">{this.state.msg}</p>
                              <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Admin: </label>
                                            <input placeholder="Admin" name="admin" className="form-control" 
                                                value={this.state.admin} onChange={this.changeAdminuHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control"
                                                value={this.state.password} onChange={this.changeAdminpHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.loginAdmin}>LogIn As Administrator</button>
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

export default AdministratorLogin;