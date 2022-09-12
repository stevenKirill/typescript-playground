// Record

interface IProduct {
  color: string
  price: number
}

type TProduct = 'cola' | 'sprite' | 'fanta'

const baverages: Record<TProduct, IProduct> = {
  cola: {
    color: 'brown',
    price: 1
  },
  sprite: {
    color: 'white',
    price: 2
  },
  fanta: {
    color: 'orange',
    price: 3
  }
}

// Readonly

interface Todo {
  title: string
}

const todo: Readonly<Todo> = {
  title: 'Delete inactive users'
}

// todo.title = "Hello";

// Pick

interface Task {
  title: string
  description: string
  completed: boolean
}

type TodoPreview = Pick<Task, 'title' | 'completed'>

const tasks: TodoPreview = {
  title: 'Clean room',
  completed: false
}
