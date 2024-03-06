// 1 variable 

const fatherName = 'Abdul Mannan'
let season = 'rainy'
season = 'winter'

//2  6 basic condition  >, < , === , == , <= , != , >= 
// multiple condition: && || 

if(fatherName === 'Abdul Mannan' || season === 'rainy'){

} else if (fatherName === 'Abdul Mannan'{

} else {

}

//3  array 
// push, pop 
// length 
//index 

const numbers = [44, 55, 63, 45, 23];
numbers[0] = 56;

//4. loop 

for (let i=0; i<numbers.length ; i++ ){
    const number = numbers[i];
    console.log(number);
}

//function 

function multiply (num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply (35, 78);

//6.objects 
const student = {
    name: 'shakib khan',
    age = 32, 
    movies: ['king khan', 'achoda public']
}

const myVariable = 'age';

console.log(student.age);
console.log(student['age']);
console.log(student[myVariable];)
