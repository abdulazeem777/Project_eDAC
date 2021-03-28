import React, { Component } from 'react';
import ViewHotelsServc from '../service/ViewHotelsServc';

class ViewHotels extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            hotels: []
        }
        this.addHotel = this.addHotel.bind(this);
        this.editHotel = this.editHotel.bind(this);
        this.deleteHotel = this.deleteHotel.bind(this);
        this.back = this.back.bind(this);
    }

    componentDidMount(){
        ViewHotelsServc.getHotels().then((res) => {
            this.setState({hotels : res.data.content});
        });
    }

    addHotel(){
        this.props.history.push('/add-hotel/_add/noname');
    }

    editHotel(hotelname){
        this.props.history.push(`/add-hotel/_edit/${hotelname}`);
    }

    deleteHotel(hotelname){
        ViewHotelsServc.deleteHotel(hotelname).then( res => {
            this.setState({hotels: this.state.hotels.filter(hotel => hotel.hotelname !== hotelname)});
        });
    }

    back(){
        this.props.history.push('/adminlogin');
    }

    render() {
        return (
            <div>
            <h2 className="text-center">ALL AVAILABLE HOTELS</h2>
            <div className = "row">
               <button className="btn btn-primary" onClick={this.addHotel}> Add Hotel</button>
            </div>
            <br></br>
            <div className = "row">
                   <table className = "table table-striped table-bordered">

                       <thead>
                           <tr>
                               <th> HOTEL NAME</th>
                               <th> PRICE</th>
                               <th> RATING</th>
                               <th> AVAILABLE ROOMS</th>
                               <th> ACTIONS </th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               this.state.hotels.map(
                                   hotel => 
                                   <tr key = {hotel.hotelname}>
                                        <td> { hotel.hotelname} </td>   
                                        <td> {hotel.price}</td>
                                        <td> {hotel.rating}</td>
                                        <td> {hotel.rooms}</td>
                                        <td>
                                            <button onClick={ () => this.editHotel(hotel.hotelname)} className="btn btn-info">Update </button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteHotel(hotel.hotelname)} className="btn btn-danger">Delete </button>
                                        </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
                   <button style={{marginTop: "15px"}} onClick={this.back} className="btn btn-danger">LogOut </button>
            </div>
       </div>
        );
    }
}

export default ViewHotels;