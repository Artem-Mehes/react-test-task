import React from "react";
import "./styles/style.css";

import { navItems, monthNames, dayNames } from './constants/data';
import Header from "./components/Header";
import Home from "./components/Home";
import Aboutus from './components/Aboutus';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Container>
            <Header navItems={navItems} />
          </Container>

          <main className="main">
            <Switch>
              <Route 
                exact 
                path="/" 
                component={() => <Home monthNames={monthNames} dayNames={dayNames} />} 
              />
              <Route path="/aboutus" component={Aboutus} />
            </Switch>
          </main>
        </Router>
    </div>
  );
}

export default App;
