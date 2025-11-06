// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears', 'grapes'];
console.log(numbers, fruit);

// Get one value - Arrays start at 0
console.log(fruits[1]);

// Add value
fruits[4] = 'blueberries';

// Add value using push()
fruits.push('strawberries');

// Add to beginning
fruits.unshift('mangos');

// Remove last value
fruits.pop();

// // Check if array
console.log(Array.isArray(fruits));

// // Get index
console.log(fruits.indexOf('oranges'));




//conditions

// const x =100;

// // if(x == 100){
// //     console.log('x is 100');
// // }

// const y = '1000';
// if(y === 1000){
//     console.log('y is 1000');
// }


//----------------------------

// const x=3;

// if(x ===10){
//     console.log('x is 10'); 

// } else if(x >10){
//     console.log('x is greater than 10');

// } else {
//     console.log('x is not 10'); 
// }

//----------------------------

// const x = 3;
// const y = 10;

// if(x > 5 || y > 10){
//     console.log('x is greater than 5 or y is greater than 10');

// } else if(x >10){
//     console.log('x is greater than 10');

// } else {
//     console.log('x is not 10'); 
// }


//----------------------------


// const x =10000;

// const color = x> 10000? 'red':'blue';

// console.log(color);

//----------------------------

//switch case
const x =10000;

const color = x> 10000? 'red':'blue';

switch (color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;          
    default:
        console.log('color is not red or blue');
        break;      

}