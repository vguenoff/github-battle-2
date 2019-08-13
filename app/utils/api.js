const id = 'Iv1.a5e06c0b0d771b77';
const sec = '7d35315398bf0512603c71a2c49f32b3fe70909f';
const params = `?client_id=${id}&client_secret=${sec}`;

function getErrorMessage(message, username) {
    return message === 'Not Found' ? `${username} doesn't exist` : message;
}

export async function getProfile(username) {
    const res = await fetch(
        `https://api.github.com/users/${username}${params}`,
    );
    const profile = await res.json();

    if (profile.message) {
        throw new Error(getErrorMessage(profile.message, username));
    }

    return profile;
}

export async function getRepos(username) {
    // return fetch(
    //     `https://api.github.com/users/${username}/repos${params}&per_page=100`,
    // )
    //     .then(res => res.json())
    //     .then(repos => {
    //         if (repos.message) {
    //             throw new Error(getErrorMessage(repos.message, username));
    //         }

    //         return repos;
    //     });

    const res = await fetch(
        `https://api.github.com/users/${username}/repos${params}&per_page=100`,
    );
    const repos = await res.json();

    if (repos.message) {
        throw new Error(getErrorMessage(repos.message, username));
    }

    return repos;
}

function getStarCount(repos) {
    return repos.reduce(
        (count, { stargazer_counts }) => count + stargazer_counts,
        0,
    );
}

function calculateScore(followers, repos) {
    return followers * 3 + getStarCount(repos);
}

function getUserData(player) {
    return Promise.all([getProfile(player), getRepos(player)]).then(
        ([profile, repos]) => ({
            profile,
            score: calculateScore(profile.followers, repos),
        }),
    );
}

function sortPlayers(players) {
    return players.sort((a, b) => b.score - a.score);
}

export function battle(players) {
    return Promise.all([getUserData(players[0]), getUserData(players[1])]).then(
        result => sortPlayers(result),
    );
}

export async function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
    );

    const res = await fetch(endpoint);
    const data = await res.json();

    if (!data.items) {
        throw new Error(data.message);
    }

    return data.items;
}
