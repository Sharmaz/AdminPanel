import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { 
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './Sections/components/header';
import Home from './Home/components/home';
import Sidebar from './Sections/components/sidebar';
import Topic01 from './Topic01/components/topic01';
import Topic02 from './Topic02/components/topic02';
import Topic03 from './Topic03/components/topic03';
import Topic04 from './Topic04/components/topic04';
import Topic05 from './Topic05/components/topic05';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/topic01" component={Topic01} />
            <Route exact path="/topic02" component={Topic02} />
            <Route exact path="/topic03" component={Topic03} />
            <Route exact path="/topic04" component={Topic04} />
            <Route exact path="/topic05" component={Topic05} />
          </Switch>
        </div>  
      </Router>
    );
  }
}

export default App;
