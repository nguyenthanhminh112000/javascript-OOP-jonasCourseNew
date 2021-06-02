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
const arr = [1, 2, 3];
console.log(arr);
console.log(arr.hasOwnProperty('length'));
console.log(arr.hasOwnProperty('2'));
console.log(arr.__proto__.__proto__.__proto__);

const func = () => {
  console.log('function');
};

console.dir(func);
console.log(func.hasOwnProperty('arguments'));
console.log(func.hasOwnProperty('caller'));
console.log(func.hasOwnProperty('name'));
console.log(func.hasOwnProperty('length'));
