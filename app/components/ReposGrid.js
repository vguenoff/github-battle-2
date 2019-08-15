import React from 'react';
import { array } from 'prop-types';
import {
    FaUser,
    FaStar,
    FaCodeBranch,
    FaExclamationTriangle,
} from 'react-icons/fa';

import Card from './Card';
import Tooltip from './Tooltip';

const ReposGrid = ({ repos }) => (
    <ul className="grid space-around">
        {repos.map((repo, i) => {
            const {
                name,
                owner,
                html_url,
                stargazers_count,
                forks,
                open_issues,
            } = repo;
            const { login, avatar_url } = owner;

            return (
                <li key={html_url}>
                    <Card
                        header={`#${i + 1}`}
                        avatar={avatar_url}
                        href={html_url}
                        name={login}
                    >
                        <ul className="card-list">
                            <li>
                                <Tooltip text="Github username">
                                    <FaUser
                                        color="rgb(255, 191, 116)"
                                        size={22}
                                    />
                                    <a href={`https://guthub.com/${login}`}>
                                        {login}
                                    </a>
                                </Tooltip>
                            </li>
                            <li>
                                <FaStar color="rgb(255, 215, 0)" size={22} />
                                {stargazers_count.toLocaleString()} stars
                            </li>
                            <li>
                                <FaCodeBranch
                                    color="rgb(129, 195, 245)"
                                    size={22}
                                />
                                {forks.toLocaleString()} forks
                            </li>
                            <li>
                                <FaExclamationTriangle
                                    color="rgb(241, 138, 147)"
                                    size={22}
                                />
                                {open_issues.toLocaleString()} open
                            </li>
                        </ul>
                    </Card>
                </li>
            );
        })}
    </ul>
);

ReposGrid.propTypes = {
    repos: array.isRequired,
};

export default ReposGrid;
