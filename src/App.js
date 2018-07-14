import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import RoutesList from "./routes";
import PropTypes from "prop-types";
import AppContainer from "./containers/AppContainer/AppContainer";

class App extends Component {
  render() {
    return (
      <AppContainer>
        <div className="App">
          <Router>
            <div>
              <header className="header">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/signup">Signup</Link>
                    </li>
                  </ul>
                </nav>
              </header>

              <div className="main">
                <RoutesList />
              </div>
            </div>
          </Router>
        </div>
      </AppContainer>
    );
  }
}

export default App;
