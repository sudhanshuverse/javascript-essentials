// const months = ['January', 'February', 'March', 'April', 'May', 'June'];

// const capitalMonths = months.forEach((month, index) => {
//     console.log(index + 1, month);
//     return month.toUpperCase();
// });


// const capitalMonths = months.map((month, index) => {
//     console.log(index + 1, month);
//     return month.toUpperCase();
// });



// const filterMonths = months.filter((month, index, array) => {
//     // console.log();
//     // console.log(array);
//     return month.toLowerCase.includes('m');
// });



// const filterMonths = months.filter((month, index, array) => {
//     // console.log();
//     // console.log(array);
//     return index >= 3;
// });


// const students = [
//     {
//         name: 'SK',
//         age: 20,
//     },

//     {
//         name: 'PK',
//         age: 18,
//     },

//     {
//         name: 'DK',
//         age: 19,
//     },

//     {
//         name: 'Rk',
//         age: 17,
//     },
// ]


// const adultStudent = students.filter( (student) => {
//     return student.age >= 18;
// }).map((student) => {
//     return student.name;
// })




// Reduce
// const nums = [ 1, 2, 3];

// nums.reduce( ( accumulator, current, i ) => {
//     // console.log(i, current);
//     console.log(accumulator, current);
//     return accumulator + current;
// }, 0)



// Some method
// const nums = [0,2,4,6,8];

// const ab = nums.some((num) => {
//     console.log(num);
// })


// console.log(ab);

// Every




// Arguments keyword
// function add() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(add(10,20));




// ES6 Feature


// Default Parameter
// function multiply(num1=1,num2=1) {
//     return num1 * num2;
// }

// console.log(multiply(12,12));


// Spread Operator

// const num1 = [ 10, 20, 30, 40, 50 ];
// const num2 = [ 50, 40, 30, 20, 10 ];

// const joinArray = {...num1, ...num2};
// console.log(joinArray);



// function add() {
//     let sum = 0;

//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// console.log(add(12,23,34,47,45,));
// const arr = [10,20,30,40,50,60,70,80,90,100];
// console.log(add(...arr));


// Rest Parameters
// const nums1 = [1,2,3,4];

// function add(...nums) {
//     console.log('nums:', nums);
//     let sum = 0;
//     for(let i = 0; i < nums.length; i++) {
//         sum = sum + nums[i];
//     }
//     return sum;
// }


// console.log( add( ...nums1 ));




// Destructing

const colors = [ 'red', 'green', 'yellow', 'pink', 'black' ];

const user = {
    name: 'Priyanshu',
    age: 15,
    address: {
        city: 'Dehradun',
        state: 'Utrakhand'
    },
}


const { name, age } = user;

console.log( name, age );

function intro ( { age, name } ) {
    console.log( age, name );
}

intro( user );