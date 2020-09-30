import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactReveal from './components/Pages/Main';
import './App.css';
import Nav from './components/Pages/Nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className='main-content'>
            <Nav />
            <Route path='/' component={ReactReveal} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
