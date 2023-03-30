// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 31;

  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }

  greet(phrase: string): void {
    if (this.name) {
      console.log(`${phrase} ${this.name}, I am ${this.age} old!`);
    } else {
      console.log('Hi');
    }
  }
}

let user1: Greetable;

user1 = new Person('Eunho');

console.log(user1);
user1.greet('Hi there - I am');

let user2 = new Person();
console.log(user2);
user2.greet('');
