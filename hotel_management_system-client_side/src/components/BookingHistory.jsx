import React, { Component } from 'react';
import ViewHotelsServc from '../service/ViewHotelsServc';

class BookingHistory extends Component {

    constructor(props){
        super(props)

        this.state = {
            email: this.props.match.params.email,
            bookings: []
        }

        this.back = this.back.bind(this);
    }

    componentDidMount(){
        ViewHotelsServc.getBookingsByEmail(this.state.email).then((res) => {
            this.setState({bookings : res.data.content});
        });
    }

    back(){
        this.props.history.push(`/userhome/${this.state.email}`);
    }

    render() {
        return (
            <div>
                <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> EMAIL</th>
                               <th> HOTELNAME</th>
                               <th> PRICE</th>
                               <th> ROOMS</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.bookings.map(
                                   booking => 
                                   <tr key = {booking.bookingId}>
                                        <td> {booking.email} </td>   
                                        <td> {booking.hotelname}</td>
                                        <td> {booking.price}</td>
                                        <td> {booking.rooms}</td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   </div>
                   <br></br>
                   <button onClick={ () => this.back()} className="btn btn-danger">Back </button>
            </div>
        );
    }
}

export default BookingHistory;