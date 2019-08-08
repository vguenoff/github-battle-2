import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Popular from './components/Popular';

// Component
// State
// Lifecycle
// UI

class App extends Component {
    render() {
        return (
            <div className="container">
                <Popular />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
