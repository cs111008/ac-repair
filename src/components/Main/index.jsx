import React, {Component} from 'react';


export default class Main extends Component {

    render() {
        return (
            <div>
        
        <section>
          <div className="cut cut-top" />
          <div className="container">
          </div>
        </section>
        <section id="services" className="section section-padded">
          <div className="container">
            <div className="row text-center title">
              <h2>Services</h2>
              <h4 className="light muted">Achieve the best results with our wide variety of Services</h4>
            </div>
            <div className="row services">
              <div className="col-md-4">
                <div className="service">
                  <div className="icon-holder">
                    <img src="img/dry_AC.png" alt className="icon" />
                  </div>
                  <h4 className="heading">Dry Servicing</h4>
                  <p className="description">Dry cleaning of filter, blower, cooling coils and more</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service">
                  <div className="icon-holder">
                    <img src="img/wet_AC.png" alt className="icon" />
                  </div>
                  <h4 className="heading">Wet Servicing</h4>
                  <p className="description">Water cleaning of filter, panel, blower, cooling coils, leakage and more.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service">
                  <div className="icon-holder">
                    <img src="img/installation.png" alt className="icon" />
                  </div>
                  <h4 className="heading">Installation</h4>
                  <p className="description">Get your AC installed by expert technicians</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cut cut-bottom" />
        </section>
      
        <section id="pricing" className="section">
          <div className="container">
            <div className="row title text-center">
              <h2 className="margin-top white">Pricing</h2>
              <h4 className="light white">Best Price Across Market</h4>
            </div>
            <div className="row no-margin">
              <div className="col-md-7 no-padding col-md-offset-5 pricings text-center">
                <div className="pricing">
                  <div className="box-main active" data-img="img/pricing1.jpg">
                    <h4 className="white">CoolOxy</h4>
                    <h4 className="white regular light"><span className="small-font"></span></h4>
                    <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-white-fill">Sign Up Now</a>
                    <i className="info-icon icon_question" />
                  </div>
                  <div className="box-second active">
                    <ul className="white-list text-left">
                      <li>Window AC Gas Refilling – 1 Ton - Rs. 1699/-</li>
                      <li>Split AC Gas Refilling – 1 Ton - Rs. 1899/-</li>
                      <li>Window AC Gas Refilling – 1.5 Ton - Rs. 1899/-</li>
                      <li>Split AC Gas Refilling – 1.5 Ton - Rs. 2099/-</li>
                      
                    </ul>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
        <section className="section section-padded blue-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="owl-twitter owl-carousel">
                  <div className="item text-center">
                    <i className="icon fa fa-twitter" />
                    <h4 className="white light">Beat the heat</h4>
                    <h4 className="light-white light">With CoolOxy</h4>
                  </div>
                  <div className="item text-center">
                    <i className="icon fa fa-twitter" />
                    <h4 className="white light">Don’t settle for less</h4>
                    <h4 className="light-white light">And we won't let you do that</h4>
                  </div>
                  <div className="item text-center">
                    <i className="icon fa fa-twitter" />
                    <h4 className="white light">Keeping You Cool</h4>
                    <h4 className="light-white light">#health #training #exercise</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </div>



        )
    }
}