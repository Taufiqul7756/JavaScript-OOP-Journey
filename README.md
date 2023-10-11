# Learn-OOP-by-JS

1.  Encapsulation

What is Encapsulation?

Encapsulation is one of the four fundamental OOP (Object-Oriented Programming) concepts, and it refers to the bundling of data (attributes) and methods (functions) that operate on the data into a single unit called a class. The data is typically hidden from direct access outside the class, and instead, it's accessed through the class's methods. Encapsulation helps in maintaining the integrity of the data and provides controlled access to it.

Look at the Example:

    class player {
    //declare private
    #name;
    #dob;
    #monthlySalary;
    #noOfMonths;
    constructor(name, dob, monthlySalary, noOfMonths) {
        this.#name = name;
        this.#dob = new Date(dob);
        this.#monthlySalary = monthlySalary;
        this.#noOfMonths = noOfMonths;
    }

    calculateSalary() {
        return (this.#monthlySalary * this.#noOfMonths).toLocaleString();
    }
    calculateAge() {
        const birthDate = this.#dob;
        const currentDate = new Date();

        const age = currentDate.getFullYear() - birthDate.getFullYear();

        return age;
    }
    }

    const tamim = new player("Tamim", "10-05-1990", 200000, 12);
    const sakib = new player("Sakib", "10-05-1990", 200000, 12);

    console.log(tamim.calculateSalary());
    console.log(sakib.calculateAge());

2.  Inheritance
3.  Abstraction
4.  Polymorphism
