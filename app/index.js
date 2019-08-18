import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

import { ThemeProvider } from './context/theme';

import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';

class App extends Component {
    state = {
        theme: 'light',
        toggleTheme: () =>
            this.setState(({ theme }) => ({
                theme: theme === 'light' ? 'dark' : 'light',
            })),
    };

    render() {
        return (
            <Router>
                <ThemeProvider value={this.state}>
                    <div className={this.state.theme}>
                        <div className="container">
                            <Nav />

                            <Route exact path="/" component={Popular}></Route>
                            <Route
                                exact
                                path="/battle"
                                component={Battle}
                            ></Route>
                        </div>
                    </div>
                </ThemeProvider>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
