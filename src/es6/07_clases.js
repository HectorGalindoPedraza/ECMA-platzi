// declarando
class User {}
// Instancia de una clase
// const newUser = new User();

class user {
  // metodos
  greeting(name) {
    return `Hello, ${name}`;
  }
}

const gndx = new user();
console.log(gndx.greeting("Oscar"));
const bebeloper = new user();
console.log(bebeloper.greeting("bebeloper"));

// constructor

class useer {
  // Constructor
  constructor() {
    console.log("Nuevo Usuario");
  }
  greeting(name) {
    return `Hello, ${name}`;
  }
}

const david = new useer();

// this <- Hace referencia al elemento padre que lo contiene

class USER {
  constructor(name) {
    this.name = name;
  }
  // metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()}, ${this.name}!`;
  }
}

const ana = new USER("Ana");
console.log(ana.greeting());

// setters getters

class user {
  // Constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Metodos
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak}, ${this.name}`;
  }

  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper1 = new user('David', 15);
console.log(bebeloper1.uAge)
console.log(bebeloper1.uAge = 20)