import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Popular from './components/Popular';
import Battle from './components/Battle';

// Component
// State
// Lifecycle
// UI

class App extends Component {
    render() {
        return (
            <div className="container">
                {/* <Popular /> */}
                <Battle />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
