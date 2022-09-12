class Singleton {
  private static instance: Singleton
  private constructor (public name: string, public id: number) {
    this.name = name
    this.id = id
  }

  static getInstance () {
    if (this.instance) {
      return this.instance
    }
    this.instance = new Singleton('mySingleton', 100)
    return this.instance
  }
}

const singleTon = Singleton.getInstance()

const singleTon2 = Singleton.getInstance()

console.log(singleTon, singleTon2)
console.log(singleTon === singleTon2)
