import React from 'react';
import { string, bool } from 'prop-types';

import withHover from '../HOC/withHover';

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
    },
    tooltip: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '160px',
        bottom: '100%',
        left: '50%',
        marginLeft: '-80px',
        borderRadius: '3px',
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        padding: '7px',
        marginBottom: '5px',
        color: '#fff',
        textAlign: 'center',
        fontSize: '14px',
    },
};

const Tooltip = ({ text, children, hover }) => (
    <div style={styles.container}>
        {hover && <div style={styles.tooltip}>{text}</div>}
        {children}
    </div>
);

Tooltip.propTypes = {
    text: string.isRequired,
    hover: bool.isRequired,
};

export default withHover(Tooltip, 'hover');
