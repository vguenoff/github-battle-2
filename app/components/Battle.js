import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Instructions from './Instructions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

export default class Battle extends Component {
    state = {
        playerOneName: null,
        playerTwoName: null,
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
        const { playerOneName, playerTwoName } = this.state;

        return (
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
                        <Link
                            className="btn dark-btn btn-space"
                            onClick={() => this.setState({ battle: true })}
                            to={{
                                pathname: '/battle/results',
                                search: `?playerOne=${playerOneName}&playerTwo=${playerTwoName}`,
                            }}
                        >
                            Battle
                        </Link>
                    )}
                </div>
            </>
        );
    }
}
