class player {
  constructor(name, dob, monthlySalary, noOfMonths) {
    this.name = name;
    this.dob = new Date(dob);
    this.monthlySalary = monthlySalary;
    this.noOfMonths = noOfMonths;
  }

  calculateSalary() {
    return this.monthlySalary * this.noOfMonths;
  }
  calculateAge() {
    const birthDate = this.dob;
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    return age;
  }
}

const tamim = new player("Tamim", "10-05-1997", 200000, 12);

console.log(tamim.calculateAge());
