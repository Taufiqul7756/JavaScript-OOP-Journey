class player {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }
  calculateAge() {
    return `${this.#name} is ${this.#age} Years Old`;
  }
}

class cricketer extends player {
  #centuries;
  constructor(name, age, centuries) {
    super(name, age);
    this.#centuries = centuries;
  }
  // Overriding
  calculateAge() {
    return `${this.getName()} er boyos ${this.getAge()} Bochor`;
  }
}

class footballer extends player {
  #goals;
  constructor(name, age, goals) {
    super(name, age);
    this.#goals = goals;
  }
}

const shakib = new cricketer("Shakib Al Hasan", 36, 15);
const Tamim = new cricketer("Tamim", 34, 22);
const Neymar = new footballer("Neymar", 30, 500);

console.log(shakib.calculateAge());
console.log(Neymar.calculateAge());
