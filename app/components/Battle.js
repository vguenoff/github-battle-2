import React, { Component } from 'react';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';
import Results from './Results';

export default class Battle extends Component {
    state = {
        playerOneName: null,
        playerTwoName: null,
        battle: false,
    };

    handleSubmit = (id, playerInput) => {
        this.setState({
            [id]: playerInput,
        });
    };

    handleReset = id => {
        this.setState({
            [id]: null,
        });
    };

    render() {
        const { playerOneName, playerTwoName, battle } = this.state;

        return battle ? (
            <Results
                playerOne={playerOneName}
                playerTwo={playerTwoName}
                onReset={() =>
                    this.setState({
                        playerOneName: null,
                        playerTwoName: null,
                        battle: false,
                    })
                }
            />
        ) : (
            <>
                <Instructions />
                <div className="players-container">
                    <h1 className="center-text header-lg">Players</h1>
                    <div className="row space-around">
                        {playerOneName === null ? (
                            <PlayerInput
                                label="Player One"
                                onSubmit={playerInput =>
                                    this.handleSubmit(
                                        'playerOneName',
                                        playerInput,
                                    )
                                }
                            />
                        ) : (
                            <PlayerPreview
                                username={playerOneName}
                                label="Player One"
                                onReset={() =>
                                    this.handleReset('playerOneName')
                                }
                            />
                        )}
                        {playerTwoName === null ? (
                            <PlayerInput
                                label="Player Two"
                                onSubmit={playerInput =>
                                    this.handleSubmit(
                                        'playerTwoName',
                                        playerInput,
                                    )
                                }
                            />
                        ) : (
                            <PlayerPreview
                                username={playerTwoName}
                                label="Player Two"
                                onReset={() =>
                                    this.handleReset('playerTwoName')
                                }
                            />
                        )}
                    </div>
                    {playerOneName && playerTwoName && (
                        <button
                            className="btn dark-btn btn-space"
                            onClick={() => this.setState({ battle: true })}
                        >
                            Battle
                        </button>
                    )}
                </div>
            </>
        );
    }
}
