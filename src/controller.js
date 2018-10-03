class Controller {
  constructor(){}
  static renderMatchPage(currentUser, userObj) {
    let userHTML;
    if (!userObj) {
      userHTML = (
        `
        <div id="flex-container">
          <div id="card">
            <p>You've run out of potential matches</p>
          </div>
          <div id="matches">
          </div>
        </div>
        `
      )
    } else {
      userHTML = (
        `
        <div id="flex-container">
          <div id="card">
            <h3>${userObj.name}</h3>
            <img src="${userObj.img_url}">
            <br>
            <h4><i class="fas fa-plus"></i> Bio</h4>
            <div id="bio">${userObj.bio}</div>
            <button data-id="${userObj.id}" id="like"><i data-id="${userObj.id}" class="far fa-heart"></i></button>
            <button data-id="${userObj.id}" id="dislike"><i data-id="${userObj.id}" class="far fa-times-circle"></i></i></button>
          </div>
          <div id="matches">
            <ul>
              ${Controller.renderMatchList(currentUser)}
            </ul>
          </div>
        </div>
        `
      )
    }
    document.body.innerHTML = userHTML
  }
  static renderNewUserForm() {
    document.body.innerHTML = (
      `
      <div id="card">
        <form id="new-user-form">
          Email:<input id="email-field"></input>
          Name:<input id="name-field"></input>
          Age:<input id="age-field"></input>
          Bio:<input id="bio-field"></input>
          Location:<input id="location-field"></input>
          Image URL:<input id="img-field"></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
      `
    )
  }

  static renderExistingUserForm() {
    document.body.innerHTML = (
      `
      <div id="card">
        <form id="existing-user-form">
          Email:<input></input>
          <input type="submit" value="submit"></input>
        </form>
      </div>
      `
    )
  }

  static renderMatchList(currentUser) {
    let listHTML = `<li>You have no matches</li>`

    if (currentUser.matches.length > 0){
      listHTML = currentUser.matches.map((match) => {
        return `<li>test</li>`
      }).join('')
    }
    return listHTML
  }
}
