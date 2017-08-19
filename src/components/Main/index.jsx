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
                    <img src="img/icons/heart-blue.png" alt className="icon" />
                  </div>
                  <h4 className="heading">Dry Servicing</h4>
                  <p className="description">Dry cleaning of filter, blower, cooling coils and more</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service">
                  <div className="icon-holder">
                    <img src="img/icons/guru-blue.png" alt className="icon" />
                  </div>
                  <h4 className="heading">Wet Servicing</h4>
                  <p className="description">Water cleaning of filter, panel, blower, cooling coils, leakage and more.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="service">
                  <div className="icon-holder">
                    <img src="img/icons/weight-blue.png" alt className="icon" />
                  </div>
                  <h4 className="heading">Installation</h4>
                  <p className="description">Get your AC installed by expert technicians</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cut cut-bottom" />
        </section>
        <section id="team" className="section gray-bg">
          <div className="container">
            <div className="row title text-center">
              <h2 className="margin-top">Schedule Repairing</h2>
            </div>
            <div className="row">
              <div className="col-md-2">
              </div>
              <div className="col-md-8">
                <form className="loginForm" action="authenticate.jsp" method="post">
                  <select className="form-control" style={{border: 'thick'}}>
                    <option value={0}>Dry Servicing</option>
                    <option value={1}>Wet Servicing</option>
                    <option value={2}>Installation</option>
                    <option value={3}>Uninstallation</option>
                    <option value={4}>Gas Top-Up</option>
                    <option value={5}>Gas Refill</option>
                    <option value={6}>Repair</option>
                    <option value={7}>3M Anti Pollution Filter Installation</option>
                  </select>
                  <input id="autocomplete2" placeholder="Enter your address" type="text" />
                </form>
              </div>
              <div className="col-md-2">
              </div>
            </div>
          </div>
        </section>
        <section id="team1" className="section gray-bg">
          <div className="container">
            <div className="row title text-center">
              <h2 className="margin-top">Team</h2>
              <h4 className="light muted">We're a dream team!</h4>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="team text-center">
                  <div className="cover" style={{background: 'url("img/team/team-cover1.jpg")', backgroundSize: 'cover'}}>
                    <div className="overlay text-center">
                      <h3 className="white">$69.00</h3>
                      <h5 className="light light-white">1 - 5 sessions / month</h5>
                    </div>
                  </div>
                  <img src="img/team/team3.jpg" alt="Team Image" className="avatar" />
                  <div className="title">
                    <h4>Ben Adamson</h4>
                    <h5 className="muted regular">Fitness Instructor</h5>
                  </div>
                  <button data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill">Sign Up Now</button>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team text-center">
                  <div className="cover" style={{background: 'url("img/team/team-cover2.jpg")', backgroundSize: 'cover'}}>
                    <div className="overlay text-center">
                      <h3 className="white">$69.00</h3>
                      <h5 className="light light-white">1 - 5 sessions / month</h5>
                    </div>
                  </div>
                  <img src="img/team/team1.jpg" alt="Team Image" className="avatar" />
                  <div className="title">
                    <h4>Eva Williams</h4>
                    <h5 className="muted regular">Personal Trainer</h5>
                  </div>
                  <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill ripple">Sign Up Now</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="team text-center">
                  <div className="cover" style={{background: 'url("img/team/team-cover3.jpg")', backgroundSize: 'cover'}}>
                    <div className="overlay text-center">
                      <h3 className="white">$69.00</h3>
                      <h5 className="light light-white">1 - 5 sessions / month</h5>
                    </div>
                  </div>
                  <img src="img/team/team2.jpg" alt="Team Image" className="avatar" />
                  <div className="title">
                    <h4>John Phillips</h4>
                    <h5 className="muted regular">Personal Trainer</h5>
                  </div>
                  <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-blue-fill ripple">Sign Up Now</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="section">
          <div className="container">
            <div className="row title text-center">
              <h2 className="margin-top white">Pricing</h2>
              <h4 className="light white">Choose your favorite pricing plan and sign up today!</h4>
            </div>
            <div className="row no-margin">
              <div className="col-md-7 no-padding col-md-offset-5 pricings text-center">
                <div className="pricing">
                  <div className="box-main active" data-img="img/pricing1.jpg">
                    <h4 className="white">Yoga Pilates</h4>
                    <h4 className="white regular light">$850.00 <span className="small-font">/ year</span></h4>
                    <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-white-fill">Sign Up Now</a>
                    <i className="info-icon icon_question" />
                  </div>
                  <div className="box-second active">
                    <ul className="white-list text-left">
                      <li>One Personal Trainer</li>
                      <li>Big gym space for training</li>
                      <li>Free tools &amp; props</li>
                      <li>Free locker</li>
                      <li>Free before / after shower</li>
                    </ul>
                  </div>
                </div>
                <div className="pricing">
                  <div className="box-main" data-img="img/pricing2.jpg">
                    <h4 className="white">Cardio Training</h4>
                    <h4 className="white regular light">$100.00 <span className="small-font">/ year</span></h4>
                    <a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-white-fill">Sign Up Now</a>
                    <i className="info-icon icon_question" />
                  </div>
                  <div className="box-second">
                    <ul className="white-list text-left">
                      <li>One Personal Trainer</li>
                      <li>Big gym space for training</li>
                      <li>Free tools &amp; props</li>
                      <li>Free locker</li>
                      <li>Free before / after shower</li>
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
                    <h4 className="white light">To enjoy the glow of good health, you must exercise.</h4>
                    <h4 className="light-white light">#health #training #exercise</h4>
                  </div>
                  <div className="item text-center">
                    <i className="icon fa fa-twitter" />
                    <h4 className="white light">To enjoy the glow of good health, you must exercise.</h4>
                    <h4 className="light-white light">#health #training #exercise</h4>
                  </div>
                  <div className="item text-center">
                    <i className="icon fa fa-twitter" />
                    <h4 className="white light">To enjoy the glow of good health, you must exercise.</h4>
                    <h4 className="light-white light">#health #training #exercise</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="modal fade" id="modal1" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content modal-popup">
              <a href="#" className="close-link"><i className="icon_close_alt2" /></a>
              <h3 className="white">Sign Up</h3>
              <form action className="popup-form">
                <input type="text" className="form-control form-white" placeholder="Full Name" />
                <input type="text" className="form-control form-white" placeholder="Email Address" />
                <div className="dropdown">
                  <button id="dLabel" className="form-control form-white dropdown" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pricing Plan
                  </button>
                  <ul className="dropdown-menu animated fadeIn" role="menu" aria-labelledby="dLabel">
                    <li className="animated lightSpeedIn"><a href="#">1 month membership ($150)</a></li>
                    <li className="animated lightSpeedIn"><a href="#">3 month membership ($350)</a></li>
                    <li className="animated lightSpeedIn"><a href="#">1 year membership ($1000)</a></li>
                    <li className="animated lightSpeedIn"><a href="#">Free trial class</a></li>
                  </ul>
                </div>
                <div className="checkbox-holder text-left">
                  <div className="checkbox">
                    <input type="checkbox" defaultValue="None" id="squaredOne" name="check" />
                    <label htmlFor="squaredOne"><span>I Agree to the <strong>Terms &amp; Conditions</strong></span></label>
                  </div>
                </div>
                <button type="submit" className="btn btn-submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>



        )
    }
}