const profiles = profileIterator(data);

nextProfile();

// Profile iterator
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}

console.log(profiles.next().value);

let button = document.getElementById("next");
button.addEventListener("click", nextProfile);

function nextProfile() {
  let currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    // Profile photo
    document.getElementById("profilePhoto").innerHTML = `
  <img src="${currentProfile.image}" alt="oops">
  `;

    // Profile Content
    document.getElementById("profileContent").innerHTML = `
  <ul class="list-group">
  <li class="list-group-item"> <span class ="mainText">Name: </span> ${currentProfile.name}</li>
  <li class="list-group-item"><span class ="mainText">Age: </span> ${currentProfile.age}</li>
  <li class="list-group-item"><span class ="mainText">Gender: </span> ${currentProfile.gender}</li>
  <li class="list-group-item"><span class ="mainText">Location: </span> ${currentProfile.location}</li>
  <li class="list-group-item"><span class ="mainText">About me: </span> ${currentProfile.about}</li>
  <li class="list-group-item"><span class ="mainText">Currenyly,  I'm looking for: </span> ${currentProfile.lookingFor}</li>
  
  </ul>
  `;
  } else {
    window.location.reload();
  }
}
