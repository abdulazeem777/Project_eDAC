import React, { Component } from 'react';
import ViewHotelsServc from '../service/ViewHotelsServc';

class UserHome extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            email: this.props.match.params.email,
            username: '',
            password: '',
            name: '',
            phoneno: '',
            country: '',
            rooms: 0,
            price: 0,
            hotels: [],
            msg:''
        }
        this.bookHotel = this.bookHotel.bind(this);
        this.changeRoomsHandler = this.changeRoomsHandler.bind(this);
        this.logout = this.logout.bind(this);
        this.bookingHistory = this.bookingHistory.bind(this);
        this.editAccount = this.editAccount.bind(this);
    }

    componentDidMount(){
        ViewHotelsServc.getHotels().then((res) => {
            this.setState({hotels : res.data.content});
        });
        ViewHotelsServc.getUserDetailsByEmail(this.state.email).then((resp) => {
            this.setState({username : resp.data.content.username, password: resp.data.content.password, name: resp.data.content.name, phoneno: resp.data.content.phoneno, country: resp.data.content.country})
        });
    }

    changeRoomsHandler= (event) => {
        this.setState({rooms: event.target.value});
    }

    bookHotel(hotel_name,avlrooms,price){
        if(this.state.rooms <= Number.parseInt(avlrooms,10))
        {
        this.props.history.push(`/booked/${hotel_name}/${this.state.username}/${this.state.rooms}/${this.state.email}/${price}/${this.state.name}/${this.state.country}/${this.state.phoneno}`);
        }
        else{
            this.setState({msg: 'Sorry Not enough rooms available'});
        }
    }

    editAccount(){
        this.props.history.push(`/editAccount/${this.state.email}`);
    }

    logout(){
        this.props.history.push('/userlogin');
    }
    bookingHistory(){
        this.props.history.push(`/myBookingHostory/${this.state.email}`);
    }
    
    render() {

        return (
            <div>
                <h3>Greetings {this.state.name} you may now select a hotel</h3>
                <p id="message">{this.state.msg}</p>
                <h2 className="text-center">ALL AVAILABLE HOTELS</h2>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                                <th> HOTEL NAME</th>
                               <th> PRICE</th>
                               <th> RATING</th>
                               {/* <th> Employee Email Id</th> */}
                               <th> AVAILABLE ROOMS</th>
                               <th> BOOK </th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.hotels.map(
                                   hotel => 
                                   <tr key = {hotel.hotelname}>
                                       <td> { hotel.hotelname} </td> 
                                        <td> { hotel.price} </td>   
                                        <td> {hotel.rating}</td>
                                        <td> {hotel.rooms}</td>
                                        <td><button onClick={ () => this.bookHotel(hotel.hotelname,hotel.rooms,hotel.price)} className="btn btn-info">Book </button></td>
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
                   <button style={{marginTop:"20px"}}onClick={ () => this.editAccount()} className="btn btn-primary">Edit Account </button>
                   <button style={{marginLeft:"20px",marginTop:"20px"}} onClick={ () => this.bookingHistory()} className="btn btn-info">My Booking History </button>
                   <button style={{marginLeft:"20px",marginTop:"20px"}} onClick={ () => this.logout()} className="btn btn-danger">LogOut </button>
            </div>
            
        );
    }
}

export default UserHome;