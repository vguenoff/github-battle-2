import React from 'react';
import { string, func } from 'prop-types';

const LanguagesNav = ({ selected, onUpdateLanguage }) => {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];

    return (
        <ul className="flex-center">
            {languages.map(language => (
                <li key={language}>
                    <button
                        className="btn-clear nav-link"
                        onClick={() => onUpdateLanguage(language)}
                        style={language === selected ? { color: 'red' } : null}
                    >
                        {language}
                    </button>
                </li>
            ))}
        </ul>
    );
};

LanguagesNav.propTypes = {
    selected: string.isRequired,
    onUpdateLanguage: func.isRequired,
};

export default LanguagesNav;
