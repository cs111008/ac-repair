import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import LocationTab from './LocationTab';
import ContactTab from './ContactTab';
import PaymentTab from './PaymentTab'; 
import TimeTab from './TimeTab';

//import jsonfile from 'jsonfile';
import fs from 'fs';
import orderDetails from './../Main/orderDetails.json';


export default class FormFlow extends Component {

    constructor(props) {
        super(props)
        this.state = {            
            ac_type: "",
            location: "",
            service_type: "",
            address: "",
            date: "",
            pincode: "",
            time: "",
            contact_number: "",
            email: "",
            name: "",
            payment_mode: ""

         }
        this.handleDataInsertion = this.handleDataInsertion.bind(this);
        this.handleLocationTabData = this.handleLocationTabData.bind(this);
        this.handleTimeTabData = this.handleTimeTabData.bind(this);               
        this.handleContactTabData= this.handleContactTabData.bind(this);
        this.handlePaymentTabData = this.handlePaymentTabData.bind(this);
      }

    componentDidMount() {
        var tabs = document.querySelectorAll(".next-step");
	
        for (var i=0; i< tabs.length;i++){
            tabs[i].addEventListener("click", (e)=> {       
                var $active = document.querySelectorAll('.board-inner .nav-tabs li.active')
                $active[0].nextElementSibling.querySelectorAll('a[data-toggle="tab"]')[0].click();
            });
        
        }
        
        
    }
    handleDataInsertion () {
        var temp = {
            orderID : orderDetails.length + 1,
            ac_type: this.state.ac_type ,
            location: this.state.location,
            service_type: this.state.service_type,
            address: this.state.address,
            date: this.state.date,
            pincode: this.state.pincode,
            time: this.state.time,
            contact_number: this.state.contact_number,
            email: this.state.email,
            name: this.state.name,
            payment_mode: this.state.payment_mode 
        }        
        orderDetails.push(temp);
        // var file = './../Main/orderDetails.json'
        
        // fs.writeFile(file, orderDetails, function (err) {
        //     console.error(err)
        // })
        console.log(orderDetails);
    }
    handleLocationTabData(payload){
        
        this.setState({
            ac_type: payload.ac_type,
            location: payload.location,
            service_type: payload.service_type
        })
    }
    handleTimeTabData(payload){
        this.setState({
            address: payload.address,
            date: payload.date,
            pincode: payload.pincode,
            time: payload.time
        })
    }                                   
    handleContactTabData(payload){
        this.setState({
            contact_number: payload.contact_number,
            email: payload.email,
            name: payload.name
        })
    }
    handlePaymentTabData(payload){
        this.setState({
            payment_mode: payload.payment_mode
        })
    }


    render() {
       
        return (
            <section className="order-form-section">
                            <div className="container">
                                <div className="row">
                                <div className="col-sm-5"></div>
                                <div className="col-sm-7">
                                <div className="board">
                                    {/* <h2>Welcome to IGHALO!<sup>T</sup></h2>*/}
                                    <div className="board-inner">
                                    <ul className="nav nav-tabs" id="myTab">
                                        <div className="liner" />
                                        <li className="active">
                                        <a href="#home" data-toggle="tab" title="welcome">
                                            <span className="round-tabs one">
                                            <i className="glyphicon glyphicon-home" />
                                            </span> 
                                        </a></li>
                                        <li><a href="#profile" data-toggle="tab" title="profile">
                                            <span className="round-tabs two">
                                            <i className="glyphicon glyphicon-user" />
                                            </span> 
                                        </a>
                                        </li>
                                        <li><a href="#settings" data-toggle="tab" title="blah blah">
                                            <span className="round-tabs three">
                                            <i className="glyphicon glyphicon-comment" />
                                            </span> 
                                        </a></li>
                                        <li><a href="#doner" data-toggle="tab" title="completed">
                                            <span className="round-tabs four">
                                            <i className="glyphicon glyphicon-ok" />
                                            </span> </a>
                                        </li>
                                    </ul></div>
                                    <div className="tab-content">
                                        <LocationTab updateLocationTabData={this.handleLocationTabData} />
                                        <TimeTab updateTimeTabData={this.handleTimeTabData} />                                    
                                        <ContactTab updateContactTabData={this.handleContactTabData} />
                                        <PaymentTab updatePaymentTabData={this.handlePaymentTabData} insertData={this.handleDataInsertion}/>
                                        <div className="clearfix" />
                                    </div>
                                </div>
                                </div>
                                {/* <div className="col-sm-2"></div> */}
                                </div>
                            </div>
                            </section>

        )
    }
}