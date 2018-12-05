// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// }

// const { name, age } = person;

// console.log(`${name} is ${age}.`);

// const book = {
//     name: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self published'} = book.publisher;

// console.log(publisherName);

const item = ['Hot Coffee', '$2.00', '$2.50', '$2.75'];

const [product, , medium] = item;

console.log(`A medium ${product} costs ${medium}.`);