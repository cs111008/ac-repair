import React, {Component} from 'react';


export default class Footer extends Component {

    render() {
        return (
            <div>
                <footer>
                <div className="container">
                    <div className="row">
                    <div className="col-sm-6 text-center-mobile">
                        <h3 className="white">Book For your AC now !</h3>
                        <h5 className="light regular light-white">With Best prices</h5>
                        <a href="#" className="btn btn-blue ripple trial-button">Book Now</a>
                    </div>
                    <div className="col-sm-6 text-center-mobile">
                        <h3 className="white">Opening Hours <span className="open-blink" /></h3>
                        <div className="row opening-hours">
                        <div className="col-sm-6 text-center-mobile">
                            <h5 className="light-white light">Mon - Fri</h5>
                            <h3 className="regular white">9:00 - 22:00</h3>
                        </div>
                        <div className="col-sm-6 text-center-mobile">
                            <h5 className="light-white light">Sat - Sun</h5>
                            <h3 className="regular white">10:00 - 18:00</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="row bottom-footer text-center-mobile">
                    <div className="col-sm-8">
                        <p><a href=""></a> exclusively by <a href="http://CoolOxy.net">CoolOxy org</a></p>
                    </div>
                    <div className="col-sm-4 text-right text-center-mobile">
                        <ul className="social-footer">
                        <li><a href="http://www.facebook.com/pages/Codrops/159107397912"><i className="fa fa-facebook" /></a></li>
                        <li><a href="http://www.twitter.com/codrops"><i className="fa fa-twitter" /></a></li>
                        <li><a href="https://plus.google.com/101095823814290637419"><i className="fa fa-google-plus" /></a></li>
                        </ul>
                    </div>
                    </div>
                </div>
                </footer>
                {/* Holder for mobile navigation */}
                <div className="mobile-nav">
                <ul>
                </ul>
                <a href="#" className="close-link"><i className="arrow_up" /></a>
                </div>
      </div>

        )
    }
}