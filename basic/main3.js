// // //oject oritrened constructors

// function Person(name, age, dob ) {
//     this.name = name;
//     this.age = age;
//     this.dob = new  Date(dob);

//     // //methods as functions
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
// }

// // prototypes,methods,properties
// Person.prototype.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }

//  ````````````````  OR`````````````````````````````````````````````````````````````````

// //class
// class Person {
//     constructor(name, age, dob) {
//         this.name = name;
//         this.age = age;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }  
// }


// //inittiate object 
// const person_a = new Person(' vsk', 21, '2000-01-01');
// const person_b = new Person(' vsk1', 25, '2002-05-05');

//   console.log(person_b.getBirthYear());
//   console.log(person_a)


// // console.log(person_a);
// // console.log(person_b);

// // console.log(person_a.dob.getFullYear());
// // console.log(person_a.dob.getMonth());
// // console.log(person_a.dob.getDate());

// // console.log(person_a.getBirthYear());
// // console.log(person_a.getFullYear());


//----------------------------------------------

