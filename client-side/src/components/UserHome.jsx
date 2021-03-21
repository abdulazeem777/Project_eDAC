import React, { Component } from 'react';
import ViewHotelsServc from '../services/ViewHotelsServc';

class UserHome extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: this.props.match.params.email,
            username: this.props.match.params.username,
            password: this.props.match.params.password,
            rooms: 0,
            hotels: []
        }
        this.bookHotel = this.bookHotel.bind(this);
        this.changeRoomsHandler = this.changeRoomsHandler.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        ViewHotelsServc.getHotels().then((res) => {
            this.setState({hotels : res.data});
        });
    }

    changeRoomsHandler= (event) => {
        this.setState({rooms: event.target.value});
    }

    bookHotel(hotel_name){
        this.props.history.push(`/booked/${hotel_name}/${this.state.username}/${this.state.rooms}/${this.state.email}/${this.state.password}`);
    }

    logout(){
        this.props.history.push('/userlogin');
    }
    
    render() {

        return (
            <div>
                <h3>Greetings {this.state.username} you may now select a hotel</h3>
                <h2 className="text-center">ALL AVAILABLE HOTELS</h2>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                                <th> HOTEL ID</th>
                               <th> HOTEL NAME</th>
                               <th> AVAILABLE ROOMS</th>
                               {/* <th> Employee Email Id</th> */}
                               <th> Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.hotels.map(
                                   hotel => 
                                   <tr key = {hotel.id}>
                                       <td> { hotel.id} </td> 
                                        <td> { hotel.hotel_name} </td>   
                                        <td> {hotel.rooms}</td>
                                        <td><button onClick={ () => this.bookHotel(hotel.hotel_name)} className="btn btn-info">Book </button></td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>

                </div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Rooms: </label>
                                            <input placeholder="Rooms" name="rooms" className="form-control" 
                                                value={this.state.rooms} onChange={this.changeRoomsHandler}/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <button onClick={ () => this.logout()} className="btn btn-danger">LogOut </button>
            </div>
            
        );
    }
}

export default UserHome;