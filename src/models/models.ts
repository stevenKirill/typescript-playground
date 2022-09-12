// interface clearer than type
interface Person {
  name: string
  age: number
  greet: () => void
  readonly job: string
}

let personOne: Person

personOne = {
  name: 'Stev',
  age: 26,
  greet () {
    return null
  },
  job: 'frontend-developer'
}

interface Fruit {
  name: string
  sweet: boolean
  price: string
}

class Apple implements Fruit {
  constructor (public name: string, public sweet: boolean, public price: string) {
    this.name = name
    this.sweet = sweet
    this.price = price
  }
}

const greenApple = new Apple('green', false, '10RUB')

interface Component {
  size: 'small' | 'medium'
  color: 'green' | 'blue'
}

interface Button extends Component {
  onClick: () => void
}

let but: Button

but = {
  size: 'medium',
  color: 'blue',
  onClick () {
    return null
  }
}
