import React, { Component } from 'react';
import easyinvoice from 'easyinvoice';
import ViewHotelsServc from '../service/ViewHotelsServc';
import Cookies from 'js-cookie';

class HotelBooked extends Component {

    constructor(props){
        super(props);
        this.state = {
            hotel_name: this.props.match.params.hotel_name,
            user: Cookies.get('user'),
            username: this.props.match.params.username,
            email: this.props.match.params.email,
            password: this.props.match.params.password,
            rooms: this.props.match.params.rooms,
            name: this.props.match.params.name,
            booking: {
                hotelname: this.props.match.params.hotel_name,
                price: this.props.match.params.price * this.props.match.params.rooms,
                email: this.props.match.params.email,
                rooms: this.props.match.params.rooms
            },
            data: {
                "documentTitle": "CHECK-IN RECEIPT", //Defaults to INVOICE
                "currency": "INR",
                "taxNotation": "GST", //or gst
                "marginTop": 25,
                "marginRight": 25,
                "marginLeft": 25,
                "marginBottom": 25,
                "logo": "https://www.easyinvoice.cloud/img/logo.png", //or base64
                //"logoExtension": "png", //only when logo is base64
                "sender": {
                    "company": this.props.match.params.hotel_name,
                    "address": "Knowledge Park",
                    "zip": "560029",
                    "city": "Bangalore",
                    "country": "India"
                    //"custom1": "custom value 1",
                    //"custom2": "custom value 2",
                    //"custom3": "custom value 3"
                },
                "client": {
                       "company": this.props.match.params.name,
                       "address": this.props.match.params.email,
                       "zip": this.props.match.params.phoneno,
                       "city": " ",
                       "country": this.props.match.params.country
                    //"email": this.props.match.params.email
                    //"custom2": "custom value 2",
                    //"custom3": "custom value 3"
                },
                "invoiceNumber": Math.random(),
                "invoiceDate": Date().toLocaleString(),
                "products": [
                    {
                        "quantity": this.props.match.params.rooms,
                        "description": "Rooms",
                        "tax": 18,
                        "price": this.props.match.params.price
                    }
                ],
                "bottomNotice": "Thank You for using hotel booking app!!!"
            }
        }
        
        this.checkout = this.checkout.bind(this);
        this.receipt = this.receipt.bind(this);
    }

    componentDidMount(){
        if(this.state.user === '')
        {
        this.props.history.push('/userlogin');
        }
    }
    
    checkout(){
        ViewHotelsServc.addBooking(this.state.booking).then((res)=>{
            this.props.history.push(`/userhome/${this.state.email}`);
        });
        
    }

    receipt(){
        easyinvoice.createInvoice(this.state.data, function (result) {
            easyinvoice.download('CheckIn-Invoice.pdf', result.pdf);
            //	you can download like this as well:
            	// easyinvoice.download();
            	// easyinvoice.download('myInvoice.pdf');   
        });
    }

    render() {
        return (
            <div>
                <h3>Congratulations {this.state.name} You've successfully booked {this.state.rooms} rooms in {this.state.hotel_name}</h3>
                <br></br>
                <button onClick={ () => this.receipt()} className="btn btn-info">Get Check-In Invoice </button>
                <br></br>
                <button style={{marginTop:"20px",marginBottom:"20px"}} onClick={ () => this.checkout()} className="btn btn-danger">Check Out </button>
            </div>
        );
    }
}

export default HotelBooked;