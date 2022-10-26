const numbers = [12, 23, 34, 45,56, 67, 78, 89, 90];
const bigNums = numbers.filter(number => number > 20);
const tiny = numbers.filter(num => num < 40);
console.log(bigNums);
console.log(tiny);


const products = [
    {id: 1, name: 'laptop', price: 45000},
    {id: 1, name: 'mobile', price: 22000},
    {id: 1, name: 'watch', price: 75000},
    {id: 1, name: 'tablet', price: 23000},
];

const expensive = products.filter(products => products.price > 30000);
console.log(expensive);