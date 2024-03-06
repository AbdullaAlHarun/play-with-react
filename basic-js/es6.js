const numbers = [44, 55, 63, 45, 23];

const student = {
    name: 'shakib khan',
    age: 32, 
    movies: ['king khan', 'achoda public']
}

//tamplate strings
const about = `My Name is ${student.name} age of ${student.age} has numbers ${numbers[2]} also liked movies ${student.movies[0]}  `;
console.log(about);

//arrow function 
const getFiftyFive = () => 55; 
const addSixtyFive = num => num =65; 
const isEven = x => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;