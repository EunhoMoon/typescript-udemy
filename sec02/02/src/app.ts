// const add = (a: number, b: number = 5) => a + b;

// console.log(add(10));

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person = {
  firstName: 'Eunho',
  age: 31,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  // const add = (...numbers: [number, number, number]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobbies, hobby1, hobby2, remainingHobbies);

const { firstName: userName, age } = person;
console.log(userName, age);
