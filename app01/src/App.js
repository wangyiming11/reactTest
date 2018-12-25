import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './pages/student/studentLayout'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <Layout/>
       <Footer/>
      </div>
    );
  }
}

export default App;
