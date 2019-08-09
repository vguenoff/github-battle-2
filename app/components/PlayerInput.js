import React, { Component } from 'react';
import { func, string } from 'prop-types';

export default class PlayerInput extends Component {
    static propTypes = {
        onSubmit: func.isRequired,
        label: string.isRequired,
    };

    state = {
        username: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.username);
    };

    handleChange = e => this.setState({ username: e.target.value });

    render() {
        return (
            <form className="column player" onSubmit={this.handleSubmit}>
                <label htmlFor="username" className="player-label">
                    {this.props.label}
                </label>
                <div className="row player-inputs">
                    <input
                        type="text"
                        id="username"
                        className="input-light"
                        placeholder="github username"
                        autoComplete="off"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                    <button
                        className="btn dark-btn"
                        type="submit"
                        disabled={!this.state.username}
                    >
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}
