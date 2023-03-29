interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string): void {
    console.log(`${phrase} ${this.name}, I am ${this.age} old!`);
  }
}

let user1: Greetable;

user1 = new Person('Eunho', 31);

user1.greet('Hi there - I am');
