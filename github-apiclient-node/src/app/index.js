const UI = require('./ui.js');
const Github = require('./github.js');

const { client_id, client_secret} = require('./config.json');

const githubClient = new Github(client_id, client_secret);
const ui = new UI();
console.log(githubClient.fetchUser('cupaiuoli'));

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
     const textSearch = document.getElementById('textSearch').value;
     if (textSearch !== '') {
         githubClient.fetchUser(textSearch)
            .then(data => {
                if (data.userData.message === 'Not Found') {
                    ui.showMessage('User does not exist', 'alert alert-danger mt-2 col-md-12');
                } else {
                    ui.showProfile(data.userData);
                    ui.showRepositories(data.repositoriesData);
                }
            });
     }
     console.log(textSearch);
     e.preventDefault();
});