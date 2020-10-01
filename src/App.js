import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Main from './components/Pages/Main';
import './App.css';
import Nav from './components/Pages/Nav';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <div className='main-content'>
            <Nav />
            <Route path='/' component={Main} />
          </div>
        </Router>
      </Fragment>
    );
  }
}

export default App;
