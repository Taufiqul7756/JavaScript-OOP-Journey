class oldArray {
  constructor() {
    this.items = [];
  }

  getItem() {
    return [...this.items];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemToRemove) {
    this.items = this.items.filter((item) => item !== itemToRemove);
  }

  updateItem(itemToUpdate, newValue) {
    const index = this.items.indexOf(itemToUpdate);

    if (index !== -1) {
      this.items[index] = newValue;
    }
  }
}

const newArray1 = new oldArray();
newArray1.addItem("I love JS");
newArray1.addItem("I love BD");

console.log(newArray1.getItem()); //[ 'I love JS', 'I love BD' ]

newArray1.removeItem("I love JS");
console.log(newArray1.getItem()); //[ 'I love BD' ]

newArray1.updateItem("I love BD", "I love Bangladesh");
console.log(newArray1.getItem()); //[ 'I love Bangladesh' ]
