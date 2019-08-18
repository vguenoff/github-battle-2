import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { ThemeProvider } from './context/theme';

import Popular from './components/Popular';
import Battle from './components/Battle';
import Nav from './components/Nav';

// Component
// State
// Lifecycle
// UI

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
            <ThemeProvider value={this.state}>
                <div className={this.state.theme}>
                    <div className="container">
                        {/* <Popular /> */}
                        <Nav />
                        <Battle />
                    </div>
                </div>
            </ThemeProvider>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
