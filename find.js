const numbers = [12, 20, 15, 25, 35, 34, 45,56, 67, 78, 89, 90];
const fives = numbers.find(num => num % 5 === 0);
const five = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(five);

const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 22000},
    {id: 1, name: 'watch', price: 75000},
    {id: 1, name: 'tablet', price: 23000},
];

const cheap = products.find(product => product.price < 40000);
const cheapAll = products.find(product => product.price < 40000);
console.log(cheap);
console.log(cheapAll);