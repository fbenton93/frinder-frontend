const Chat = (() => {
  let allChats = []

  return class Chat {
    constructor(chatObj) {
      this.id = chatObj.id
      this.first_id = chatObj.first_id
      this.second_id = chatObj.second_id
      this.messages = chatObj.messages
      allChats.push(this)
    }

    static all() {
      return allChats
    }
  }
})()
