document.addEventListener('DOMContentLoaded', function() {

  const signIn = document.getElementById("returning")
  const signUp = document.getElementById("new")

  let currentUser;

  signIn.addEventListener('click',function() {
    Controller.renderExistingUserForm()
  })

  signUp.addEventListener('click', function() {
    Controller.renderNewUserForm()
  })


  document.body.addEventListener('submit', (event) => {
    event.preventDefault()
    const eventData = event.target.children
    // New User Form
    if (event.target.id === "new-user-form") {
      Adapter.postUser({new_user: {
        email: eventData[0].value,
        name: eventData[1].value,
        age: eventData[2].value,
        bio: eventData[3].value,
        location: eventData[4].value,
        img_url: eventData[5].value
      }})
      .then(userData => {
        currentUser = new User(userData)
        const randomUser = currentUser.randomUser()
        Controller.renderMatchPage(randomUser)
      })
    } else if (event.target.id === "existing-user-form") { // Login Form
      currentUser = User.findByEmail(eventData[0].value)
      let randomUser = currentUser.randomUser()
      Controller.renderMatchPage(currentUser, randomUser)
    }
  })

  // Like/Dislike events
  document.body.addEventListener("click", (event) => {
    let likeCheck;
    let buttonCheck = false
    if (event.target.id == "like" || event.target.className == "far fa-heart") {
      buttonCheck = true
      likeCheck = true
    } else if (event.target.id == "dislike" || event.target.className == "far fa-times-circle") {
      buttonCheck = true
      likeCheck = false
    }

    if (buttonCheck) { // Check if like/dislike was clicked
      let newRel = {relationships: {liker_id: currentUser.id, likee_id: event.target.dataset.id, liked: likeCheck}}
      Adapter.postRelationship(newRel)
      .then(relData => {
        currentUser.liker_relationships.push(relData)
        let randomUser = currentUser.randomUser()
        Controller.renderMatchPage(randomUser)
      })
    }
  })


  Adapter.fetchUsers()
  .then(response => response.json())
  .then(data => {
    for(const i of data) {
      new User(i)
    }






  })










})
