import React, { Component } from 'react';


class HotelHomepage extends Component {



    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.addUser = this.addUser.bind(this);
        this.UserLogin = this.UserLogin.bind(this);
        this.AdminLogin = this.AdminLogin.bind(this);
    }

    addUser(){
        this.props.history.push('/registeruser');
    }

    UserLogin(){
        this.props.history.push('/userlogin');
    }

    AdminLogin(){
        this.props.history.push('/adminlogin');
    }

    render() {
        return (
            <div>
                {/* <ViewHotels /> */}
                <button style={{marginTop:"20px"}} className="btn btn-primary" onClick={this.addUser}> New User? Register</button>
                <br></br>
                <button style={{marginTop:"20px"}} className="btn btn-info" onClick={this.UserLogin}> LogIn</button>
                <br></br>
                <button style={{marginTop:"20px",marginBottom:"20px"}} className="btn btn-danger" onClick={this.AdminLogin}> Admin LogIn</button>
            </div>
        );
    }
}

export default HotelHomepage;