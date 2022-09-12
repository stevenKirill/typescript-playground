const num: number = 1
const button = document.querySelector('#btn') as HTMLButtonElement

button.addEventListener('click', () => {
  console.log('pressed!dd!!')
})

class Department {
  // private name: string;
  protected employees: string[] = []
  constructor (public name: string, public readonly id: number) {
    this.name = name
  }

  logger (this: Department) {
    console.log('DEP ' + this.name)
  }

  static createEmployee (name: string) {
    return {
      name,
      surName: `${name}_pupkin`
    }
  }

  addEmployees (empl: string) {
    this.employees.push(empl)
  }

  printEmployee () {
    console.log(this.employees, this.employees.length)
  }
}

const IT = new Department('IT', 1)

console.log(Department.createEmployee('IUvan'))
IT.addEmployees('Stev')
IT.addEmployees('Anna')
IT.printEmployee()
console.log(IT, '=> IT')

class HRDepartment extends Department {
  constructor (id: number, public admins: string[]) {
    super('hr', id)
    this.admins = admins
  }
}

const hrInstance = new HRDepartment(2, ['Rita'])
hrInstance.addEmployees('Polina')
hrInstance.addEmployees('Tina')
console.log(hrInstance, '=> hr')

class RaperDepartment extends Department {
  private bestSong: string
  constructor (id: number, public rapers: string[]) {
    super('rap', id)
    this.rapers = rapers
    this.bestSong = '0/100'
  }

  get getBestSong () {
    if (this.bestSong === '0/100') {
      return this.bestSong
    } else {
      return 'nothing'
    }
  }

  set setnewSong (newBestSong: string) {
    this.bestSong = newBestSong
  }

  addEmployees (name: string) {
    if (name !== 'Stev') {
      this.employees.push(name)
    }
  }
}

const raperInstance = new RaperDepartment(3, ['Drake'])
raperInstance.addEmployees('Stev')
raperInstance.addEmployees('Eminem')
console.log(raperInstance, '=> rap')
console.log(raperInstance.getBestSong)
raperInstance.setnewSong = 'passionfruit'
console.log(raperInstance.getBestSong)
