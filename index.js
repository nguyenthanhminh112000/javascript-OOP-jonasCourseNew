// /////////////////////////////////////// FUNCTION CONSTRUCTOR, PROTOTYPE, PROTOTYPE CHAIN, PROTOTYPAL INHERITANCE
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.logInfo = function (params) {
//     console.log(`from constructor`);
//   };
// }
// Person.prototype.fullName = 'Nguyen';
// Person.prototype.logInfo = function () {
//   console.log(`${this.name} ${this.fullName} ${this.age}`);
// };

// const minh = new Person('minh', 20);
// console.log(minh);
// console.log(minh.__proto__ === Person.prototype);
// console.log(Person.prototype.constructor === Person);
// console.log(minh.__proto__.__proto__.__proto__);

//////////////////////////////////////////// PROTOTYPAL INHERITANCE ON BUILD-IN OBJECTS
// const arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.hasOwnProperty('length'));
// console.log(arr.hasOwnProperty('2'));
// console.log(arr.__proto__.__proto__.__proto__);

// const func = () => {
//   console.log('function');
// };

// console.dir(func);
// console.log(func.hasOwnProperty('arguments'));
// console.log(func.hasOwnProperty('caller'));
// console.log(func.hasOwnProperty('name'));
// console.log(func.hasOwnProperty('length'));

// //////////////////////////////////////////// ES6 CLASSES
// class PersonCl {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   calAgeVersion2() {
//     console.log(this.age);
//   }
// }
// PersonCl.prototype.lastName = 'Nguyen';
// const johnDNguyen = new PersonCl('John Davidson', 21);
// console.log(johnDNguyen);
// console.log(johnDNguyen.__proto__ === PersonCl.prototype);

// ////////////////////////////////////////// GETTERS AND SETTERS
// // const john = {
// //   name: 'John',
// //   lastName: 'Nguyen',
// //   properties: ['house-284 Tran Phu'],

// //   get getProp() {
// //     return this.properties;
// //   },

// //   set setProp(property) {
// //     this.properties.push(property);
// //   },

// //   getProps: function () {
// //     return this.properties;
// //   },
// //   setProps: function (property) {
// //     this.properties.push(property);
// //   },
// // };
// // console.log(john);
// // console.log(john.getProp);
// // john.setProp = 'land-Ngo Quyen';
// // console.log(john);
// // console.log(john.getProps());
// // john.setProps('land-Hung Loc');
// // console.log(john);
// // console.log(john.hasOwnProperty('setProp'));
// // console.log(john.hasOwnProperty('setProp'));
// class PersonCl {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   calAgeVersion2() {
//     console.log(this.age);
//   }

//   // get age() {
//   //   return this._age;
//   // }

//   set age(age) {
//     this._age = age;
//   }

//   // get name() {
//   //   return this._name;
//   // }

//   set name(name) {
//     if (name.includes(' ')) {
//       this._name = name;
//     } else {
//       console.log(`${name} isn't a fullname`);
//     }
//   }
// }

// const jessica = new PersonCl('Jessica', 20);
// console.log(jessica);
// console.log(jessica.name);
// console.log(jessica.age);

// ////////////////////////////////////////// STATIC METHOD & PROPERTY

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// Person.greet = function () {
//   console.log('Greet from Person static method');
//   console.log(this);
// };
// const john = new Person('john d nguyen', 20);
// Person.greet();
// Person.namee = 'minh';
// console.log(Person.namee);
// console.log(john);

// class PersonCl {
//   static greet() {
//     console.log(`Hello everyone`);
//   }
//   static namee = 'minh';
//   static greetVersion2 = function () {
//     console.log('Hello everyone version 2');
//   };
// }

// const person1 = new PersonCl();
// console.log(person1);
// PersonCl.greet();
// PersonCl.greetVersion2();
// console.log(PersonCl.namee);

// ////////////////////////////////////////// OBJECT.CREATE()
// const personPrototype = {
//   calcAge() {
//     return this.age;
//   },
//   nameee: 'Minh',
// };

// const john = Object.create(personPrototype);
// john.fullName = 'Nguyen';

////////////////////////////////////////// INHERITANCE BETWEEN CLASSES
function Person(fullName, yearOfBirth) {
  this.fullName = fullName;
  this.yearOfBirth = yearOfBirth;
  this.logFnc = function () {
    console.log(`Hello from Person`);
  };
}
Person.prototype.calcAge = function () {
  return 2021 - this.yearOfBirth;
};
Person.prototype.somethingWrong = true;

function Student(fullName, yearOfBirth, course) {
  Person.call(this, fullName, yearOfBirth);
  this.course = course;
}
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype.greetFromStudent = function () {
  console.log(`Hello from Student`);
};

const johnDNguyen = new Student('John D Nguyen', 2000, 'Harvard CS courses');
console.log(johnDNguyen);
console.log(johnDNguyen instanceof Student);
console.log(johnDNguyen instanceof Person);
console.log(johnDNguyen instanceof Object);
