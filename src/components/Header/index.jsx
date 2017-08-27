import React, {Component} from 'react';
import FormFlow from './../FormFlow';

export default class Header extends Component {

    render() {
        return (
            <div>
                <div className="preloader">
                    <img src="img/loader.gif" alt="Preloader image" />
                </div>

                <nav className="navbar">
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className="navbar-brand" href="#"><img src="img/logo.png" data-active-url="img/logo-active.png" alt />CoolOxy</a>
                    </div>
                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right main-nav">
                        <li><a href="#intro">Intro</a></li>
                        <li><a href="#services">Services</a></li>
                       <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#modal1" className="btn btn-blue">Sign Up</a></li>
                    </ul>
                    </div>
                    {/* /.navbar-collapse */}
                </div>
                {/* /.container-fluid */}
                </nav>
                <header id="intro">
                <div className="container">
                    <div className="table">
                    <div className="header-text">
                        <div className="row">
                        <div className="col-md-12 text-center">
                            <FormFlow />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </header>
      </div>

        )
    }
}