import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './NullPointerException.svg';
import './App.css';

const App: React.FC<any> = () => {
    return (
        < Router>
            <div className="App">
                < header className="App-header">
                    < img src={logo} className="App-logo" alt="logo" />
                    < p>
                        Welcome to the <code><strong>NullPointerException</strong></code> team place
                    </p>
                    <Link to="Projects">
                        <code><strong>Link : Our Team Projects</strong></code>
                    </Link>
                    <Link to="AboutUs">
                        <code><strong>Link : About Us</strong></code>
                    </Link>
                </header>
            </div>
            < Switch>
            </Switch>
        </Router>
    );
}

export default App;
