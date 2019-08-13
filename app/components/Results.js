import React, { Component } from 'react';

export default class Battle extends Component {
    render() {
        return (
            <div>
                Results
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        );
    }
}
