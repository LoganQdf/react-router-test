import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './About';
import Apple from './Apple';
import Botom from './Basic/Botom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to={'/about'}>About</Link> <br/>
        <Link to={'/'}>Apple</Link> <br/>
        <Link to={'/botom'}>Botom</Link>
        <Route exact  path="/" component={Apple}/>
        <Route path="/about" component={About}/>
        <Route path='/botom' component={Botom}/>
      </div>
    </Router>
    );
  }
}


export default App;
