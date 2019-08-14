import React, { Component } from 'react';
import { fetchPopularRepos } from '../utils/api';

import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';
import Loading from './Loading';

export default class Popular extends Component {
    state = {
        selectedLanguage: 'All',
        repos: {},
        error: null,
    };

    componentDidMount() {
        this.updateLanguage(this.state.selectedLanguage);
    }

    updateLanguage = selectedLanguage => {
        this.setState({
            selectedLanguage,
            error: null,
        });

        if (!this.state.repos[selectedLanguage]) {
            fetchPopularRepos(selectedLanguage)
                .then(data => {
                    this.setState(({ repos }) => ({
                        repos: {
                            ...repos,
                            [selectedLanguage]: data,
                        },
                    }));
                })
                .catch(err => {
                    console.warn(`Error fetching repos: ${err}`);

                    this.setState({
                        error: 'There was an error fetching the repositories',
                    });
                });
        }
    };

    isLoading = () => {
        const { repos, selectedLanguage, error } = this.state;

        return !repos[selectedLanguage] && error === null;
    };

    render() {
        const { selectedLanguage, repos, error } = this.state;

        return (
            <>
                <LanguagesNav
                    selected={selectedLanguage}
                    onUpdateLanguage={this.updateLanguage}
                />

                {this.isLoading() && <Loading text="Fetching repos" />}
                {error && <p className="center-text error">{error}</p>}
                {/* <pre>{JSON.stringify(repos[selectedLanguage], null, 2)</pre> */}
                {repos[selectedLanguage] && (
                    <ReposGrid repos={repos[selectedLanguage]} />
                )}
            </>
        );
    }
}
