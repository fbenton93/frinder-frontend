const User = (() => {
  let users = []
  return class User {
    constructor(obj){
      this.id = obj.id
      this.email = obj.email
      this.name = obj.name
      this.age = obj.age
      this.bio = obj.bio
      this.location = obj.location
      this.img_url = obj.img_url
      this.likee_relationships = (obj.likee_relationships ? obj.likee_relationships : [])
      this.liker_relationships = (obj.liker_relationships ? obj.liker_relationships : [])
      users.push(this)
    }

    static findById(id) {

    }

    static all() {
      return users
    }
    static findByEmail(email) {
      return users.find(user => {
        return user.email == email
      })
    }
    // checkIfMatch(id) {
    //   return this.likee_relationships.find(function(rel){
    //     return rel.id == id
    //   })
    // }

    elligibleUsers() {
      let likeIds = this.liker_relationships.map(function (rel){
        return rel.likee_id
      })
      likeIds.push(this.id)
      return users.filter((user) => {
        return !likeIds.includes(user.id)
      })
    }

    randomUser() {
      const users = this.elligibleUsers()
      const randomIndex = Math.floor(Math.random() * users.length);
      return users[randomIndex]
    }

    matches() {
      return this.
    }
  }
})()
