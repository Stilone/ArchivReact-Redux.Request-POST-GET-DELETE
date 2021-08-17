import React from "react";
import './App.css';
import { store } from './redux/createStore';
import { Provider } from "react-redux";
import { Count } from "./Count"
import { Home } from "./redux/Home";


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Provider store={store}>
        <div className="App">
            <Router>
                <ul>
                    <li>
                        <h1>First Page</h1>
                    </li>

                    <li>
                        <Link to="/Home">HomeComponent</Link>
                    </li>

                    <li>
                        <Link to="/Count">Count</Link>
                    </li>
                </ul>
                <Switch>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Count">
                        <Count />
                    </Route>
                </Switch>
            </Router>
        </div>
        </Provider>
    );
}

export default App;
