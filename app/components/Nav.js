import React from 'react';

import { ThemeConsumer } from '../context/theme';

const Nav = () => (
    <ThemeConsumer>
        {({ theme, toggleTheme }) => (
            <nav className="row space-between">
                <button
                    style={{ fontSize: 30 }}
                    className="btn-clear"
                    onClick={toggleTheme}
                >
                    {theme === 'light' ? '🔦' : '💡'}
                </button>
            </nav>
        )}
    </ThemeConsumer>
);

export default Nav;
