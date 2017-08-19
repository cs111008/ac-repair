import React, {Component} from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'


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
            autocompleteContainer: 'autocomplete-container'
           
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
                                            <span className="round-tabs four">
                                            <i className="glyphicon glyphicon-comment" />
                                            </span> 
                                        </a></li>
                                        <li><a href="#doner" data-toggle="tab" title="completed">
                                            <span className="round-tabs five">
                                            <i className="glyphicon glyphicon-ok" />
                                            </span> </a>
                                        </li>
                                    </ul></div>
                                    <div className="tab-content">
                                    <div className="tab-pane fade in active" id="home">
                                        <form className="order-flow-form">
                                            {/* <input id="autocomplete" placeholder="Enter your location" className="form-control get-order-control" type="text"/> */}
                                            <PlacesAutocomplete classNames={cssClasses} inputProps={inputProps}  autocompleteItem={AutocompleteItem} />
                                            <select className="form-control get-order-control" onChange={this.handleServiceType} defaultValue={this.state.serviceType}>
                                                <option value={0}>-----Service Type -----</option>
                                                <option value={1}>Dry Servicing</option>
                                                <option value={2}>Wet Servicing</option>
                                                <option value={3}>Installation</option>
                                                <option value={4}>Uninstallation</option>
                                                <option value={5}>Gas Top-Up</option>
                                                <option value={6}>Gas Refill</option>
                                                <option value={7}>Repair</option>
                                                <option value={8}>3M Anti Pollution Filter Installation</option>
                                            </select>
                                            <select className="form-control get-order-control">
                                            <option value={11}>-----AC Type -----</option>
                                                <option>
                                                   
                                                        <label className="checkbox">
                                                            <input type="checkbox" /> Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Rs.1750]</label>
                                                  
                                                </option>
                                                <option>
                                                    
                                                        <label className="checkbox">
                                                            <input type="checkbox" /> Window&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Rs.1750]</label>
                                                   
                                                </option>
                                            </select>
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple  btn-full">Submit</button>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="profile">
                                        <form className="order-flow-form">
                                            <input placeholder="Enter your address" className="form-control get-order-control" type="text"/>
                                            <input placeholder="Enter your pincode (Optional)" className="form-control get-order-control" type="text"/>
                                            <input placeholder="Enter your address" className="form-control get-order-control" type="date"/>
                                        
                                            <select className="form-control get-order-control">
                                            <option value={11}>-----Choose time -----</option>
                                                <option>
                                                
                                                        <label className="checkbox">
                                                            <input type="checkbox" /> Split&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Rs.1750]</label>
                                                
                                                </option>
                                                <option>
                                                    
                                                        <label className="checkbox">
                                                            <input type="checkbox" /> Window&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Rs.1750]</label>
                                                
                                                </option>
                                            </select>
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple  btn-full">NEXT</button>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="messages">
                                        <h3 className="head text-center">Bootsnipp goodies</h3>
                                        <p className="narrow text-center">
                                        Lorem ipsum dolor sit amet, his ea mollis fabellas principes. Quo mazim facilis tincidunt ut, utinam saperet facilisi an vim.
                                        </p>
                                        <p className="text-center">
                                        <a href className="btn btn-success btn-outline-rounded green"> start using bootsnipp <span style={{marginLeft: 10}} className="glyphicon glyphicon-send" /></a>
                                        </p>
                                    </div>
                                    <div className="tab-pane fade" id="settings">
                                        <form className="order-flow-form">
                                            <input placeholder="Enter your Name" className="form-control get-order-control" type="text"/>
                                            <input placeholder="Contact Number" className="form-control get-order-control" type="tel"/>
                                            <input placeholder="Email address" className="form-control get-order-control" type="email"/>                                       
                                            
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple  btn-full">Checkout</button>
                                        </form>
                                    </div>
                                    <div className="tab-pane fade" id="doner">
                                        <div className="order-flow-form">
                                            <div className="row">
                                                <div className="col-sm-4">
                                                <input name="paymentMode" className="payment-mode-control" type="radio"/><label className="pay-mode-lbl">Cash On Door</label>
                                                </div>
                                                <div className="col-sm-4">
                                                <input name="paymentMode" className="payment-mode-control" type="radio"/><label className="pay-mode-lbl">Internet Banking</label>
                                                </div>
                                                <div className="col-sm-4">
                                                <input name="paymentMode" className="payment-mode-control" type="radio"/><label className="pay-mode-lbl">Paytm</label>
                                                </div>
                                            </div>                          
                                            
                                            <button type="submit" className="btn btn-info btn-blue-fill ripple  btn-full">Confirm Booking</button>
                                        </div>
                                    </div>
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