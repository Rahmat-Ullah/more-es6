const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]
console.log(users[0].name);

const data = {
    count: 4000,
    data: [
        {id: 1, name: 'babul', job: 'leader'},
        {id: 2, name: 'habul', job: 'leader'}
    ]
}
const firstJob = data.data[0].job;
// console.log();

const user = {
    id: 3001,
    name: 'Shamim Gazi',
    address: {
        street: {
            first: '32/1 kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'cantonment',
        city: 'dhaka'
    }
}

const userFloor = user.address.street.third;
console.log(userFloor);