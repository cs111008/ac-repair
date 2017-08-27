import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


export default class LocationTab extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            address: '',
            serviceType: 'Select',
            acType: 'Select'
         }
        this.onChange = (address) => this.setState({ address })
        this.handleServiceType = this.handleServiceType.bind(this);
        this.handleACType = this.handleACType.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
      }

    componentDidMount() {
        
    }
    handleServiceType (e) {        
        this.setState({serviceType: e.target.value})
    }
    handleACType (e) {
        this.setState({acType: e.target.value})
    }
    handleFormSubmit(e) {
        e.preventDefault()        
           
            var payload = {
                "location": this.state.address ,
                "service_type": this.state.serviceType,
                "ac_type": this.state.acType
            };
            
           // console.log('Success----------', payload)
            this.props.updateLocationTabData(payload)
       
    }


    render() {
        const inputProps = {
            value: this.state.address,
            onChange: this.onChange,
            type: 'search',
            placeholder: 'Enter your location...',
            autoFocus: true,
          }
          const cssClasses = {
            
            input: 'form-control get-order-control',
            autocompleteContainer: 'autocomplete-container',
            autocompleteItem: 'autocomplete-item'
           
          }
         
          const AutocompleteItem = ({ suggestion }) => (<div className="autocomplete-item-text"><i className="fa fa-map-marker"/>{suggestion}</div>)

        return (
            
                                    <div className="tab-pane fade in active" id="home">
                                        <form className="order-flow-form" onSubmit = {this.handleFormSubmit}>
                                            {/* <input id="autocomplete" placeholder="Enter your location" className="form-control get-order-control" type="text"/> */}
                                            <PlacesAutocomplete classNames={cssClasses} inputProps={inputProps}  autocompleteItem={AutocompleteItem} />
                                            <select name="serviceType" className="form-control get-order-control" onChange={this.handleServiceType} defaultValue={this.state.serviceType}>
                                                <option value={"Select"}>-----Service Type -----</option>
                                                <option value={"Dry Servicing"}>Dry Servicing</option>
                                                <option value={"Wet Servicing"}>Wet Servicing</option>
                                                <option value={"Installation"}>Installation</option>
                                                <option value={"Uninstallation"}>Uninstallation</option>
                                                <option value={"Gas Top-Up"}>Gas Top-Up</option>
                                                <option value={"Gas Refill"}>Gas Refill</option>
                                                <option value={"Repair"}>Repair</option>
                                                <option value={"3M Anti Pollution Filter Installation"}>3M Anti Pollution Filter Installation</option>
                                            </select>
                                            <select name="AcType" className="form-control get-order-control" onChange={this.handleACType} defaultValue={this.state.acType}>
                                            <option value={"Select"}>-----AC Type -----</option>
                                                <option value={"Split [Rs.175]"}>
                                                   
                                                        <label className="checkbox">
                                                        <input type="checkbox" /> Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Rs.1750]</label>
                                                  
                                                </option>
                                                <option value={"Window [Rs.175]"}>
                                                    
                                                        <label className="checkbox">
                                                            <input type="checkbox" /> Window&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Rs.1750]</label>
                                                   
                                                </option>
                                            </select>
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple next-step  btn-full">Submit</button>
                                        </form>
                                    </div>
                                    
        )
    }
}