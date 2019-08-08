export async function fetchPopularRepos(language) {
    const endpoint = window.encodeURI(
        `https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`,
    );

    try {
        const res = await fetch(endpoint);
        const data = await res.json();

        if (!data.items) {
            throw new Error(data.message);
        }

        return data.items;
    } catch (err) {
        throw new Error(err);
    }
}
