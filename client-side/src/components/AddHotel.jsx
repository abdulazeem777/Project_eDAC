import React, { Component } from 'react';
import ViewHotelsServc from '../services/ViewHotelsServc';

class AddHotel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            hotel_name: '',
            rooms: ''
        }
        this.changeHotelNameHandler = this.changeHotelNameHandler.bind(this);
        this.changeRoomsHandler = this.changeRoomsHandler.bind(this);
        this.saveOrUpdateHotel = this.saveOrUpdateHotel.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            ViewHotelsServc.getHotelbyId(this.state.id).then( (res) =>{
                let hotel = res.data;
                this.setState({hotel_name: hotel.hotel_name,
                    rooms: hotel.rooms
                });
            });
        }        
    }
    saveOrUpdateHotel = (e) => {
        e.preventDefault();
        let hotel = {hotel_name: this.state.hotel_name, rooms: this.state.rooms};
        console.log('hotel => ' + JSON.stringify(hotel));

        // step 5
        if(this.state.id === '_add'){
            ViewHotelsServc.createHotel(hotel).then(res =>{
                this.props.history.push('/');
            });
        }else{
            ViewHotelsServc.updateHotel(hotel, this.state.id).then( res => {
                this.props.history.push('/');
            });
        }
    }
    
    changeHotelNameHandler= (event) => {
        this.setState({hotel_name: event.target.value});
    }

    changeRoomsHandler= (event) => {
        this.setState({rooms: event.target.value});
    }

    cancel(){
        this.props.history.push('/viewhotels');
    }

    getTitle(){
        if(this.state.id === '_add'){
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
                                                value={this.state.hotel_name} onChange={this.changeHotelNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Rooms: </label>
                                            <input placeholder="Rooms" name="rooms" className="form-control" 
                                                value={this.state.rooms} onChange={this.changeRoomsHandler}/>
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