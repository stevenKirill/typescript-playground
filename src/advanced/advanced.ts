// intersection

interface Admin {
  name: string
  priviligies: string[]
}

interface Employee {
  name: string
  startDate: Date
}

type ElevatedEmployee = Admin & Employee

const el: ElevatedEmployee = {
  name: 'Kir',
  priviligies: ['deleting'],
  startDate: new Date()
}

type strOrNum = string | number
type numOrBool = number | boolean
type Combine = strOrNum & numOrBool

// type guards

function add (a: strOrNum, b: strOrNum) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
};

add(1, 1)

type Unknown = Employee | Admin

class Car {
  drive () {
    console.log('driving car')
  }
}

class Truck {
  drive () {
    console.log('driving truck')
  }

  loadCargo (amount: number) {
    console.log('loading cargo' + amount)
  };
};

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle (vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(100)
  };
};

useVehicle(v1)
useVehicle(v2)

// discriminated unions
interface Bird {
  flyingSpeed: number
  kind: 'bird'
}

interface Horse {
  runningSpeed: number
  kind: 'horse'
}

type Animal = Bird | Horse

function moveAnimal (animal: Animal) {
  let speed
  switch (animal.kind) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
    default:
      speed = 'no speed'
  };
  return speed
};

moveAnimal({ kind: 'bird', flyingSpeed: 10 })

// type casting

const p = document.getElementById('message') as HTMLParagraphElement

console.dir(p)

// index properties

interface ErrorContainer {
  [prop: string]: string
};

const errorne: ErrorContainer = {
  email: 'invalid email',
  phone: 'incorreect phone'
}

// function overloads

function xFunc (c: string, d: string): string
function xFunc (c: string, d: number): string
function xFunc (c: number, d: string): string
function xFunc (c: number, d: number): number
function xFunc (c: strOrNum, d: strOrNum) {
  if (typeof c === 'string' || typeof d === 'string') {
    return c.toString() + d.toString()
  };
  return c + d
};

const res = xFunc('hi', ' friend')
const res2 = xFunc(2, 10)
console.log(res2, res2.toExponential(1))
console.log(res.toUpperCase())

// optional chaining

const fetchedData = {
  id: '11',
  name: 'Kirill',
  job: { title: 'frontend', salary: '3000$' }
}

console.log(fetchedData?.job?.title)

// nullish coalescing

const userInp = ''

const storedData = userInp || 'DEFAULT'

const nullish = userInp ?? 'DEFAULTT'

console.log(storedData, '=d')
console.log(nullish, '=> dw')
