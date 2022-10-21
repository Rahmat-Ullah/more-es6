//1. var let const
// break up with var
const numbers = [12, 23, 34, 45, 56];
let salary = 3456;
salary = 45677;

//2. default parameters
function calculateSalary(salary, tax = 0.25, bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}

//3. template string

const elementHTML = `
<div>
    <h3>Name: </h3>
    <p>Address: </p>
    <p>Salary: ${calculateSalary(10000, 0, 0)} </p>
    <p>Others: ${numbers[2]}</p>
</div>
`

//4. arrow function
const doubleIt = x => x * 2;
const calculateSalary2 = (salary, tax, bonus) => salary - salary * tax + bonus;

//5. spread
const ages = [11, 22, 33, 44, 55];
const newAges = [...ages, 66, 77, 88];

//6. destructuring
const {x, y, z, ...c} = {x: 34, y: 23, z: 44, name: 'Rahmat Ullah', salary: 17000};
const [a, b] = [12, 23, 34, 45, 56];