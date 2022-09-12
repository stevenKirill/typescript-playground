
// array

const names: Array<string | number> = ['Kirill', 'Anna']
console.log(names)

// promise

const promise: Promise<string> = new Promise((resolve) => {
  setTimeout(() => {
    resolve('done')
  }, 1000)
})

void promise.then((res) => {
  res.toLocaleLowerCase()
})

// generic function

function merge<T, U> (objA: T, objB: U): {} & U {
  return Object.assign(objA, objB)
};

// ts infer types

const merged = merge({ name: 'Kirill' }, { age: 19 })
merged.age = 20
// console.log(merged,'=> merged')

// constraints

function merge2<T extends object, U extends object> (objA: T, objB: U) {
  return Object.assign(objA, objB)
};

const merged2s = merge2({ color: 'red' }, { size: 'medium' })
console.log(merged2s)

// one more generic function

interface Lengthy {
  length: number
}
function counterDescriber<T extends Lengthy> (el: T): [T, string] {
  let disc = 'some text'
  if (el.length > 0) {
    disc = 'got els ' + el.length
  } else if (el.length === 1) {
    disc = 'got 1 el'
  }
  return [el, disc]
}

// console.log(counterDescriber('Hi ppl'));
// console.log(counterDescriber(['2','3']));

// keyof constraint

function extract<T extends object, U extends keyof T> (obj: T, key: U) {
  return obj[key]
};

// console.log(extract({ name: 'Kia' },'name'))
// console.log(extract({ name: 'Kia' },'price'))

// generic classes

class DataStorage<T> {
  private readonly data: T[] = []

  addItem (item: T): void {
    this.data.push(item)
  };

  removeItem (item: T): void {
    if (this.data.indexOf(item) === -1) {
      return
    }
    this.data.splice(this.data.indexOf(item), 1) // -1
  };

  getItems (): T[] {
    return [...this.data]
  };
};

const textStorage = new DataStorage<string>()

textStorage.addItem('str1')
textStorage.addItem('str2')
textStorage.removeItem('str1')
// console.log(textStorage.getItems());

// concrete type
const numbersStorage = new DataStorage<number>()
console.log(numbersStorage)

// concrete type
const objectStorage = new DataStorage<object>()

objectStorage.addItem({ name: 'Kirill' })
objectStorage.addItem({ name: 'Anna' })
objectStorage.removeItem({ name: 'Kirill' })
// console.log(objectStorage.getItems());
const kirObject = objectStorage.getItems()[0]
objectStorage.removeItem(kirObject)
// console.log(objectStorage.getItems());

// generic utility type (built in types)

interface Goal {
  title: string
  description: string
  completeUntil: Date
}

// partial
function createGoal (title: string, description: string, date: Date): Partial<Goal> {
  return {
    title,
    completeUntil: date,
    description
  }
};

// readonly

const cities: Readonly<string[]> = ['Tokyo', 'New York']
// cities.push('Seoul')

// generic types vs utility types
