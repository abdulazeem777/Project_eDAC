import React, { Component } from 'react';
import ViewHotelsServc from '../service/ViewHotelsServc';

class AddHotel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            hotelname: this.props.match.params.hotelname,
            rooms: '',
            rating: '',
            price: ''
        }
        this.changeHotelNameHandler = this.changeHotelNameHandler.bind(this);
        this.changeRoomsHandler = this.changeRoomsHandler.bind(this);
        this.changeRatingHandler = this.changeRatingHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateHotel = this.saveOrUpdateHotel.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else 
        if(this.state.id === '_edit'){
            ViewHotelsServc.getHotelbyname(this.state.hotelname).then( (res) =>{
                let hotel = res.data.content;
                this.setState({hotelname: hotel.hotelname,
                    rooms: hotel.rooms,rating: hotel.rating,price: hotel.price
                });
            });
        }        
    }
    saveOrUpdateHotel = (e) => {
        e.preventDefault();
        let hotel = {hotelname: this.state.hotelname, rooms: this.state.rooms, rating: this.state.rating, price: this.state.price};
        console.log('hotel => ' + JSON.stringify(hotel));

        // step 5
        if(this.state.id === '_add'){
            ViewHotelsServc.createHotel(hotel).then(res =>{
                this.props.history.push('/viewhotels');
            });
        }else if(this.state.id === '_edit'){
            ViewHotelsServc.updateHotel(hotel).then( res => {
                this.props.history.push('/viewhotels');
            });
        }
    }
    
    changeHotelNameHandler= (event) => {
        this.setState({hotelname: event.target.value});
    }

    changeRoomsHandler= (event) => {
        this.setState({rooms: event.target.value});
    }

    changeRatingHandler= (event) => {
        this.setState({rating: event.target.value});
    }

    changePriceHandler= (event) => {
        this.setState({price: event.target.value});
    }

    cancel(){
        this.props.history.push('/viewhotels');
    }

    getTitle(){
        if(this.state.hotelname === '_add'){
            return <h3 className="text-center">Add Hotel</h3>
        }else{
            return <h3 className="text-center">Update Hotel</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Hotel Name: </label>
                                            <input placeholder="Hotel Name" name="hotel_name" className="form-control" 
                                                value={this.state.hotelname} onChange={this.changeHotelNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Rooms: </label>
                                            <input placeholder="Rooms" name="rooms" className="form-control" 
                                                value={this.state.rooms} onChange={this.changeRoomsHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Rating: </label>
                                            <input placeholder="Rating" name="rating" className="form-control" 
                                                value={this.state.rating} onChange={this.changeRatingHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price: </label>
                                            <input placeholder="Price" name="price" className="form-control" 
                                                value={this.state.price} onChange={this.changePriceHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateHotel}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddHotel;