class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }

  introduceSelf() {
    console.log(`Hi, I'm ${this.name}!`)
  }

  describeSelf() {
    console.log('I am a basic, run-of-the-mill person')
  }
}

class Employee extends Person {
  job: string

  constructor(name: string, job: string) {
    super(name)
    this.job = job
  }

  describeSelf() {
    console.log(`I participate in capitalism as a ${this.job}`)
  }
}

const x = (y: string): boolean => {
  const carsCharacters = [
    'Lightning McQueen',
    'Sally Carrera',
    'Tow Mater',
    'Doc Hudson',
  ]

  // The following lines can actually be simplified to 'return carsCharacters.includes(y)', since
  // '.includes' returns a boolean, but this makes it easier to get your head around.
  if (!carsCharacters.includes(y)) {
    return false
  }

  return true
}

console.log(x('Lightning McQueen'))

class A {
  declineIceCreamStore(): string {
    return "I wish we could go, but we can't today"
  }

  lie(): string {
    return 'The ice cream store is closed because it is too cold outside'
  }
}

class B extends A {
  lie(): string {
    return "Yeah your dad is right. Also, I own every kind of classic car because I'm rich, right? I even have doubles... of the cars. Some of them. Actually, I have triples of the Barracuda."
  }
}

const me = new A()
const guyAtRestaurant = new B()

me.declineIceCreamStore()
me.lie()
guyAtRestaurant.lie()

const person = new Person('Brent')
const employee = new Employee('Brent', 'Electronics Guy')
person.introduceSelf()
person.describeSelf()
employee.introduceSelf()
employee.describeSelf()
