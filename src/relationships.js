const Relationship = (() => {
  let relationships = []
  return class Relationship {
    constructor(obj){
      this.id = obj.id
      this.liker_id = obj.liker_id
      this.likee_id = obj.likee_id
      relationships.push(this)
    }
  }
})()
