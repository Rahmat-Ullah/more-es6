const numbers = [12, 23, 34, 45];
const half = numbers.map(n => n/2);
const half2 = numbers.map(n => n/3);
// console.log(half);
// console.log(half2);

const friends = ['Tom hanks', 'tom cruise', 'tom brady', 'tom solaiman'];
const firstLetters = friends.map(friend => friend[0]);
console.log(firstLetters);
const nameLengths = friends.map(friend => friend.length);
// console.log(nameLengths);
const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 22000},
    {id: 1, name: 'watch', price: 75000},
    {id: 1, name: 'tablet', price: 23000},
];

const items = products.map(product => product.name);
const prices = products.map(product => product.price);
console.log(items);
console.log(prices);