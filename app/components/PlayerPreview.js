import React from 'react';
import { string, func } from 'prop-types';

import { FaTimesCircle } from 'react-icons/fa';

const PlayerPreview = ({ username, onReset, label }) => (
    <div className="column player">
        <h3 className="player-label">{label}</h3>
        <div className="row bg-light">
            <div className="player-info">
                <img
                    className="avatar-small"
                    src={`https://github.com/${username}.png?size=200`}
                    alt={`Avatar for ${username}`}
                />
                <a href={`https://github.com/${username}`} className="link">
                    {username}
                </a>
            </div>
            <button className="btn-clear flex-center" onClick={onReset}>
                <FaTimesCircle color="rgb(194, 57, 42)" size={26} />
            </button>
        </div>
    </div>
);

PlayerPreview.propTypes = {
    username: string.isRequired,
    onReset: func.isRequired,
    label: string.isRequired,
};

export default PlayerPreview;
