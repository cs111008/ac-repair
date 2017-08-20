import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


export default class ContactTab extends Component {

    constructor(props) {
        super(props)        
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

    handleFormSubmit(e) {
        e.preventDefault()        
           
        var payload = {
            "name": e.target.name.value ,
            "contact_number": e.target.contactNumber.value,
            "email": e.target.email.value
            };
            
        console.log('Success----------', payload)
       
    }


    render() {
       
        return (
                <div className="tab-pane fade" id="settings">
                                        <form className="order-flow-form" onSubmit = {this.handleFormSubmit}>
                                            <input name="name" placeholder="Enter your Name" className="form-control get-order-control" type="text"/>
                                            <input name="contactNumber" placeholder="Contact Number" className="form-control get-order-control" type="tel"/>
                                            <input name="email" placeholder="Email address" className="form-control get-order-control" type="email"/>                                       
                                            
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple next-step btn-full">Checkout</button>
                                        </form>
                                    </div>

        )
    }
}