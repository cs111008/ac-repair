import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


export default class TimeTab extends Component {

    constructor(props) {
        super(props)
        this.state = { 
           time: "Choose Time"
         }
        
        this.handleTimeSelection = this.handleTimeSelection.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

    handleTimeSelection (e) {
       // console.log("__________",e.target.value);
        this.setState({time: e.target.value})
    }
    handleFormSubmit(e) {
        e.preventDefault()        
           
            var payload = {
                "address": e.target.addr.value,
                "pincode":  e.target.pinCode.value,
                "date":  e.target.date.value,
                "time": this.state.time
            };
            
            this.props.updateTimeTabData(payload)
       
    }


    render() {
       

        return (
               <div className="tab-pane fade" id="profile">
                                        <form className="order-flow-form" onSubmit={this.handleFormSubmit}>
                                            <input name="addr" placeholder="Enter your address" className="form-control get-order-control" type="text"/>
                                            <input name="pinCode" placeholder="Enter your pincode (Optional)" className="form-control get-order-control" type="text"/>
                                            <input name="date" placeholder="Enter Date" className="form-control get-order-control" type="date"/>
                                        
                                            <select className="form-control get-order-control" onChange={this.handleTimeSelection} defaultValue={this.state.time}>
                                                <option className="selectoption" value="Choose Time">Choose Time</option>
                                                <option className="selectoption" value="09:00 AM-12:00 PM">09:00 AM-12:00 PM</option>
                                                <option className="selectoption" value="12:00 PM-03:00 PM">12:00 PM-03:00 PM</option>
                                                <option className="selectoption" value="03:00 PM-06:00 PM">03:00 PM-06:00 PM</option>
                                            </select>
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple next-step  btn-full">NEXT</button>
                                        </form>
                                    </div>
                                   

        )
    }
}