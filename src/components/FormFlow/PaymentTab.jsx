import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


export default class PaymentTab extends Component {

    constructor(props) {
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

   handleFormSubmit(e) {
        e.preventDefault()        
           
        var payload = {
            "payment_mode": e.target.paymentMode.value
            };
            
        console.log('Success----------', payload)
       
    }


    render() {
        

        return (
           
                                    
                                    <div className="tab-pane fade" id="doner">
                                        <div className="order-flow-form">
                                        <form className="order-flow-form" onSubmit = {this.handleFormSubmit}>
                                            <div className="row">
                                                <div className="col-sm-4">
                                                <input name="paymentMode" value="Cash On Door" className="payment-mode-control" type="radio"/><label className="pay-mode-lbl">Cash On Door</label>
                                                </div>
                                                <div className="col-sm-4">
                                                <input name="paymentMode" value="Internet Banking" className="payment-mode-control" type="radio"/><label className="pay-mode-lbl">Internet Banking</label>
                                                </div>
                                                <div className="col-sm-4">
                                                <input name="paymentMode" value="Paytm" className="payment-mode-control" type="radio"/><label className="pay-mode-lbl">Paytm</label>
                                                </div>
                                            </div> 
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple  btn-full">Confirm Booking</button>
                                         </form> 
                                        </div>
                                    </div>                                    

        )
    }
}