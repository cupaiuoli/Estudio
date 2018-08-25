const fetch = require('node-fetch');


async function getNombreAwait(username) {
  const url = `https://api.github.com/users/${username}`;
  console.log(`fetching user ${username} at - ${url}`);

  const response = await fetch(url);
  const json = await response.json();
  console.log(json.name);
}


function getNombre(username) {
  const url = `https://api.github.com/users/${username}`;
  console.log(`fetching user ${username} at - ${url}`);
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.name)
    })
}

getNombreAwait('cupaiuoli');
