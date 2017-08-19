import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';


//import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <Main/>
        <Footer/>
      </div>
    );
  }
}

export default App;
