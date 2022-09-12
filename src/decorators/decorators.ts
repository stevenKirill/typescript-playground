
// decorator factory
function Log (_: string) {
  console.log('Logger inside')
  return function (constructor: Function) {
    console.log(constructor)
  }
};

// multiple decorators call bottom up
// decorator class example
@Log('logging now call')
@withTemplate('<p>Hello paragraf</p>', 'root')
class Person {
  name = 'kirill'

  constructor () {
    console.log('person')
  };
};

const pers = new Person()

function withTemplate (template: string, id: string): void {
  console.log('template inside')
  return function (constructor: any) {
    const p = new constructor()
    const el = document.getElementById(id)
    console.log(el)
    if (el != null) {
      el.innerHTML = template + p.name
    };
  }
};

// property decorators and accesors
// calls when class definition
function LogDecor (target: any, propertyName: string | symbol): void {
  console.log('propertt')
  console.log(target, '=> constructor')
  console.log(propertyName)
};

function LogDecor2 (target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('accessor')
  console.log(target)
  console.log(name)
  console.log(descriptor)
};

class Cars {
  @LogDecor
    model: string

  private _price: number

  constructor (m: string, p: number) {
    this.model = m
    this._price = p
  };

  getPriceWithTax (tax: number) {
    return this._price * (1 + tax)
  };

  @LogDecor2
  set price (v: number) {
    if (v > 0) {
      this._price = v
    } else {
      throw new Error('invalid input')
    };
  };
};

// decorators call me a class is defined
