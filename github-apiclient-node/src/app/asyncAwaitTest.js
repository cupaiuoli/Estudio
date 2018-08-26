const fetch = require('node-fetch');


async function getNameAsync(username) {
  const url = `https://api.github.com/users/${username}`;
  console.log(`fetching user ${username} at - ${url}`);

  const response = await fetch(url);
  const json = await response.json();

  if (response.status !== 200 || json.message == 'Not Found') {
    throw Error('User does not exist');
  }
  return json.name;
}


function getName(username) {
  const url = `https://api.github.com/users/${username}`;
  console.log(`fetching user ${username} at - ${url}`);
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json.name)
    })
}

(async function() {
  try {
    const name = await getNameAsync('cupaiuoli')
    console.log(name);
  } catch (e) {
    console.log(e);
  }
})()
/*
const name = getNameAsync('cupaiuolidd');
name.then(completeName => console.log(completeName))
  .catch(error => console.log(`${error}`));
*/
