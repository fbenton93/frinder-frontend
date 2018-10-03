class Adapter {
  static fetchUsers() {
    return fetch("http://localhost:3000/api/v1/users")
  }

  static fetchChats() {
    return fetch("http://localhost:3000/api/v1/chats")
      .then(response => response.json())
      .then(chatData => {
        for(const chatObj of chatData) {
          new Chat(chatObj)
        }
      })
  }

  static postChat(chatObj) {
    return fetch("http://localhost:3000/api/v1/chats", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(chatObj)
    }).then(response => response.json())
  }

  static postUser(userObj) {
    return fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userObj)
    }).then(response => response.json())
  }

  static postRelationship(relObj) {
    return fetch("http://localhost:3000/api/v1/relationships", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(relObj)
    }).then(response => response.json())
  }
} // end class
