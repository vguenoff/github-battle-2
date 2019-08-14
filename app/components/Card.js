import React from 'react';
import { string } from 'prop-types';

const Card = ({ header, subheader, avatar, href, name, children }) => (
    <div className="card bg-light">
        <h4 className="header-lg center-text">{header}</h4>
        <img className="avatar" src={avatar} alt={`Avatar for ${name}`} />
        {subheader && <h4 className="center-text">{subheader}</h4>}
        <h2 className="center-text">
            <a className="link" href={href}>
                {name}
            </a>
        </h2>
        {children}
    </div>
);

Card.propTypes = {
    header: string.isRequired,
    subheader: string,
    avatar: string.isRequired,
    href: string.isRequired,
    name: string.isRequired,
};

export default Card;
