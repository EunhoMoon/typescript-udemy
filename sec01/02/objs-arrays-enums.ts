// const person: {
//   name: string;
//   age: number;
// } = {
//   name: 'Eunho',
//   age: 31,
// };
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//     name: "Eunho",
//     age: 31,
//     hobbies: ["Movie", "Book"],
//     role: [2, "author"]
// };

enum Role {
    ADMIN, READ_ONLY, AUTHOR
};

const person = {
    name: "Eunho",
    age: 31,
    hobbies: ["Movie", "Book"],
    role: Role.ADMIN
};

let favoriteActivities: string[];
favoriteActivities = ["Book"];

// person.role.push("admin");

console.log(person.name);
// console.log(person.role);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}

if (person.role === Role.ADMIN) {
    console.log(person.name + " is Admin");
}