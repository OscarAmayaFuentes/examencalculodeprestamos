import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from "../../../App"

class IndexFlex extends Component {

  render() {
    return (
      <>
        <div className="app s-pxy-2">
        <h1 className="s-center">Bienvenidos a Sendrix</h1>
        <Router>
          <ul className="nav-container s-border s-main-center s-pl-0">
            
            <li className="nav-container--item s-mr-2">
            <Link to="/">Inicio</Link></li>
            
          </ul>
          <Switch>
            <Route exact path="/" component={App}/>
            
          </Switch>
        </Router>
        </div>
      </>
    );
  }
}

render(<IndexFlex />, document.getElementById('root'));