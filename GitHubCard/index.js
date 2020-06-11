/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

axios
  .get(`https://api.github.com/users/robert-lark`)
  .then((res) => {
    console.log(res);
    res.data.forEach((url) =>{
      cards.appendChild(githubIdCards(data.avatar_url, data.name, data.login, data.location, data.followers, data.following, data.bio))
      })
  })
  .catch(err => {
    console.log('oh no!, ', err);
  })




// creating the elements
function githubIdCards (avatar_url, name, login, location, followers, following, bio) {
 const newDiv = document.createElement('div');
 const newImg = document.createElement('img');
 const newDiv2 = document.createElement('div');
 const newH3 = document.createElement('h3');
 const newP = document.createElement('p');
 const newP2 = document.createElement('p');
 const newP3 = document.createElement('p');
 const newP4 = document.createElement('p');
 const newP5 = document.createElement('p');
 const newP6 = document.createElement('p');
 const newA = document.createElement('a');

// styling them

newDiv.classList.add('card');
newImg.src = avatar_url;
newDiv2.classList.add = ('card-info');
newH3.classList.add =('name')
newH3.textContent = name;
newP.classList.add('username');
newP.textContent = login;
newP2.textContent = `Location: ${location}`;
newP4.textContent = `Followers: ${followers}`;
newP5.textContent = `Following: ${following}`;
newP6.textContent = `Bio: ${bio}`;

//appending

newDiv.appendChild(newImg);
newDiv.appendChild(newDiv2);
newDiv2.appendChild(newH3);
newDiv2.appendChild(newP);
newDiv2.appendChild(newP2);
newDiv2.appendChild(newP3);
newDiv2.appendChild(newP4);
newDiv2.appendChild(newp5);
newDiv2.appendChild(newp6);

return githubIdCards;

}

const cards = document.querySelector('.cards');

// data.forEach((data) =>{
// cards.appendChild(githubIdCards(data.avatar_url, data.name, data.login, data.location, data.followers, data.following, data.bio))
// })