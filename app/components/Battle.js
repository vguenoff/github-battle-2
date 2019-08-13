import React, { Component } from 'react';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default class Battle extends Component {
    state = {
        playerOne: null,
        playerTwo: null,
    };

    handleSubmit = (id, player) => {
        this.setState({
            [id]: player,
        });
    };

    handleReset = id => {
        this.setState({
            [id]: null,
        });
    };

    render() {
        const { playerOne, playerTwo } = this.state;

        return (
            <>
                <Instructions />
                <div className="players-container">
                    <h1 className="center-text header-lg">Players</h1>
                    <div className="row space-around">
                        {playerOne === null ? (
                            <PlayerInput
                                label="Player One"
                                onSubmit={player =>
                                    this.handleSubmit('playerOne', player)
                                }
                            />
                        ) : (
                            <PlayerPreview
                                username={playerOne}
                                label="Player One"
                                onReset={() => this.handleReset('playerOne')}
                            />
                        )}
                        {playerTwo === null ? (
                            <PlayerInput
                                label="Player Two"
                                onSubmit={player =>
                                    this.handleSubmit('playerTwo', player)
                                }
                            />
                        ) : (
                            <PlayerPreview
                                username={playerTwo}
                                label="Player Two"
                                onReset={() => this.handleReset('playerTwo')}
                            />
                        )}
                    </div>
                </div>
            </>
        );
    }
}
