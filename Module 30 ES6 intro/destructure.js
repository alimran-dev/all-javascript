const students = ['abul', 'babul', 'cabul', 'dabul', 'ebul'];
const [first, second, third, ...remains] = students;
// console.log(remains);

const user = {
    id: 12345,
    username: 'example_user',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30,
    isActive: true,
    roles: ['user', 'member'],
    address: {
        street: '123 Main Street',
        city: 'Cityville',
        state: 'State',
        postalCode: '12345'
    },
};

const { id, firstName, lastName, age: boyos, username, roles, ...rest } = user;

console.log(boyos);