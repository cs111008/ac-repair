import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import LocationTab from './LocationTab';
import ContactTab from './ContactTab';
import PaymentTab from './PaymentTab'; 
import TimeTab from './TimeTab';


export default class FormFlow extends Component {

    constructor(props) {
        super(props)
        this.state = { 
            address: '',
            serviceType: '0'
         }
        this.onChange = (address) => this.setState({ address })
        this.handleServiceType = this.handleServiceType.bind(this);
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
    handleServiceType (e) {
        console.log("__________",e.target.value);
        this.setState({serviceType: e.target.value})
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
         
          const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)

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
                                        <LocationTab />
                                        <TimeTab />                                    
                                        <ContactTab />
                                        <PaymentTab />
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