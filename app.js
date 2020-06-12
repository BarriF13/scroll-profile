// -1 Pretend Data -- not from api

const data = [
  {
    name: 'Sarah Savage',
    age: '54',
    gender: ' Fluid',
    looking: 'Anything',
    location: 'London',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Zara Bloatier',
    age: '43',
    gender: ' Fluid',
    looking: 'Anything',
    location: 'Paris',
    image: 'https://randomuser.me/api/portraits/women/33.jpg'
  },
  {
    name: 'Philip Blue',
    age: '42',
    gender: ' Fluid',
    looking: 'Anything',
    location: 'Hen',
    image: 'https://randomuser.me/api/portraits/men/73.jpg'
  },
  {
    name: 'Babooska Mers',
    age: '43',
    gender: ' Fluid',
    looking: 'Anything',
    location: 'Paris',
    image: 'https://randomuser.me/api/portraits/women/83.jpg'
  },
  {
    name: 'Yahoo Kilton',
    age: '40',
    gender: ' Fluid',
    looking: 'Anything',
    location: 'Barcelona',
    image: 'https://randomuser.me/api/portraits/women/19.jpg'
  }
];
//-3 we make a var and assign it into the data 
const profiles = profileIterator(data);
// Call the first profile manually
nextProfile();

// -4 click event 
document.getElementById('next').addEventListener('click', nextProfile);

//-5 make the next profile function
function nextProfile() {
  const currentProfile = profiles.next().value;
  // if we run out of profile we wrapp it in if Statement
  if (currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML =
      `<ul class="list-group">
      <li class="list-group-item"> Name: ${currentProfile.name} </li>
      <li class="list-group-item"> Age: ${currentProfile.age} </li>
      <li class="list-group-item"> Location: ${currentProfile.location} </li>
      <li class="list-group-item"> Preference: ${currentProfile.gender} looking for ${currentProfile.looking}</li>
      </ul>
    `;

    document.getElementById('imageDisplay').innerHTML = `
    <img src="${currentProfile.image}">`;
  } else {
    // No more profile
    window.location.reload();

  }
}



//-2 PROFILE  Iterator
function profileIterator(profiles) {
  // first making a var-- it is like a counter
  let nextIndex = 0;
  // then we return an object with next function
  return {
    next: function () {
      return nextIndex < profiles.length ?
        { value: profiles[nextIndex++], done: false } :
        { done: true }
    }
  };
}