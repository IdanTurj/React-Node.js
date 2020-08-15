import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Games from './Orders/games';
import Group from './gamesdetail/Group'

function App() {
    return (
        <div className="App">
            <Router>
                <Route path="/" exact component={Games} />
                <Route path="/games/:id" component={Group} />
            </Router>
        </div>
    );
}

export default App;