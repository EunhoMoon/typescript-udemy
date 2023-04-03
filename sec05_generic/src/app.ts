// const names: Array<string> = ['Eunho', 'Max'];

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

// promise.then((result) => {
//   console.log(result);
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({name: "Eunho", hobbies: ["book", "movie"]}, {age: 31});
console.log(mergedObj.age);

interface lengthy {
  length: number;
}

function countAndDescribe<T extends lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 0) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return `Value : ${obj[key]}`;
}

console.log(extractAndConvert({name: "Eunho"}, "name"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  remove(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("text");
textStorage.addItem("test");
textStorage.remove("text");
console.log(textStorage.getItems());

const objStorage = new DataStorage<object>();
let item = {name: "Eunho"};
objStorage.addItem(item);
objStorage.addItem({name: "test"});
objStorage.remove(item);
console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUtil: Date;
}

function createCourseGoal(title: string, description: string, date: Date): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUtil = date;

  return courseGoal as CourseGoal;
}

const names: Readonly<string[]> = ['Eunho', 'Max'];
// names.push("CK");  // error