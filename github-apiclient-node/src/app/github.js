class Github {
    constructor(clientId, clientSecret) {
        this.client_id = clientId;
        this.client_secret = clientSecret;
    }

    async fetchUser(username) {
        console.log('Searching: ' + username);
        let userDataRequest = await fetch(`http://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let repositoriesRequest = await fetch(`http://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        let userData = await userDataRequest.json();
        let repositoriesData = await repositoriesRequest.json();
        console.log(userData);
        console.log(repositoriesData);
        return {
            userData,
            repositoriesData
        };
    }
}

module.exports = Github;