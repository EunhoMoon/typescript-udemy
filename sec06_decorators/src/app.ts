function Logger(target: Function) {
  console.log("Logging...");
  console.log(target);
}

@Logger
class Person {
  name = 'Eunho'

  constructor() {
    console.log("Create person object");
  }
}

const person = new Person();

console.log(person);