import React, { Component } from 'react';
import easyinvoice from 'easyinvoice';

class HotelBooked extends Component {

    constructor(props){
        super(props);
        this.state = {
            hotel_name: this.props.match.params.hotel_name,
            username: this.props.match.params.username,
            email: this.props.match.params.email,
            password: this.props.match.params.password,
            rooms: this.props.match.params.rooms,
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
                    "company": "HOTEL MANAGEMENT APP",
                    "address": "Knowledge Park",
                    "zip": "560029",
                    "city": "Bangalore",
                    "country": "India"
                    //"custom1": "custom value 1",
                    //"custom2": "custom value 2",
                    //"custom3": "custom value 3"
                },
                "client": {
                       "company": this.props.match.params.username,
                       "address": "Clientstreet",
                       "zip": "4567 CD",
                       "city": "Clientcity",
                       "country": "Clientcountry"
                    //"custom1": "custom value 1",
                    //"custom2": "custom value 2",
                    //"custom3": "custom value 3"
                },
                "invoiceNumber": Math.random(),
                "invoiceDate": Date().toLocaleString(),
                "products": [
                    {
                        "quantity": this.props.match.params.rooms,
                        "description": this.props.match.params.hotel_name,
                        "tax": 18,
                        "price": 3500
                    }
                ],
                "bottomNotice": "Thank You for using hotel booking app!!!"
            }
        }
        
        this.checkout = this.checkout.bind(this);
        this.receipt = this.receipt.bind(this);
    }

    
    checkout(){
        this.props.history.push(`/userhome/${this.state.email}/${this.state.username}/${this.state.password}`);
    }

    receipt(){
        easyinvoice.createInvoice(this.state.data, function (result) {
            easyinvoice.download('myInvoice.pdf', result.pdf);
            //	you can download like this as well:
            //	easyinvoice.download();
            //	easyinvoice.download('myInvoice.pdf');   
        });
    }

    render() {
        return (
            <div>
                <h3>Congratulations {this.state.username} You've successfully booked {this.state.rooms} rooms in {this.state.hotel_name}</h3>
                <br></br>
                <button onClick={ () => this.receipt()} className="btn btn-danger">Get Check-In Invoice </button>
                <br></br>
                <button style={{marginTop:"20px",marginBottom:"20px"}} onClick={ () => this.checkout()} className="btn btn-danger">Check Out </button>
            </div>
        );
    }
}

export default HotelBooked;