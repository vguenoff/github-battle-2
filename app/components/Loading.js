import React, { Component } from 'react';

import { string, number } from 'prop-types';

const styles = {
    content: {
        fontSize: '35px',
        position: 'absolute',
        left: '0',
        right: '0',
        marginTop: '20px',
        textAlign: 'center',
    },
};

export default class Loading extends Component {
    static propTypes = {
        text: string.isRequired,
        speed: number.isRequired,
    };

    static defaultProps = {
        text: 'Loading',
        speed: 300,
    };

    state = {
        content: this.props.text,
    };

    componentDidMount() {
        const { text, speed } = this.props;

        this.updateInterval = window.setInterval(() => {
            this.state.content === `${text}...`
                ? this.setState({ content: text })
                : this.setState(({ content }) => ({ content: content + '.' }));
        }, speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.updateInterval);
    }

    render() {
        return <p style={styles.content}>{this.state.content}</p>;
    }
}
