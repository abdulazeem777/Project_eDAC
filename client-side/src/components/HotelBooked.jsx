import React, { Component } from 'react';

class HotelBooked extends Component {

    constructor(props){
        super(props);
        this.state = {
            hotel_name: this.props.match.params.hotel_name,
            username: this.props.match.params.username,
            email: this.props.match.params.email,
            password: this.props.match.params.password,
            rooms: this.props.match.params.rooms
        }
        
        this.checkout = this.checkout.bind(this);
    }

    checkout(){
        this.props.history.push(`/userhome/${this.state.email}/${this.state.username}/${this.state.password}`);
    }

    render() {
        return (
            <div>
                <h3>Congratulations {this.state.username} You've successfully booked {this.state.rooms} rooms in {this.state.hotel_name}</h3>
                <button onClick={ () => this.checkout()} className="btn btn-danger">Check Out </button>
            </div>
        );
    }
}

export default HotelBooked;