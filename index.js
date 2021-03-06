// // procedural programming
// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// }

// console.log(getWage(30000, 10, 20));
// ///////////////////////////////////////////////////////////////////////////

// // OOP implementation
// const getSalary = {
//   baseSalary: 30000,
//   overtime: 10,
//   rate: 10,

//   getWage() {
//     return this.baseSalary + this.overtime * this.rate;
//   }
// };

// console.log(getSalary.getWage());
// ///////////////////////////////////////////////////////////////////////////

// // object literal syntax
// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1
//   },

//   draw() {
//     console.log("draw");
//   }
// };

// circle.draw();
// //////////////////////////////////////////////////////////////////////////

// // Factory function
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw4");
//     }
//   };
// }

// const circle = createCircle(2);
// console.log(circle);
// ////////////////////////////////////////////////////////////////////////////

// // constructor functions
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log('draw');
//   }
// }

// const another = new Circle()
// ////////////////////////////////////////////////////////////////////////

// // value vs ref types
// let x = { value : 10 };

// function increase(x){
//   x.value++
// }

// increase(x);
// console.log(x)
// /////////////////////////////////////////////////////////////////

// // adding properties to an object
// function Circle(radius){
//   this.radius = radius;
//   this.draw = function(){
//     console.log('draw$');
//   }
// }

// const circle = new Circle(4);

// circle.location = { x: 1 };
// circle['location'] = { y: 2};

// // const propertyName = 'location';
// delete circle['location'];

// console.log(circle);

// //////////////////////////////////////////////////////////////////////
// // enumerating properties
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function() {
//     console.log("draw$");
//   };
// }

// const circle = new Circle(4);

// for (let key in circle) {
//   if (typeof circle[key] !== 'function') {
//     console.log(key, circle[key]);
//   }
// }

// const keys = Object.keys(circle);
// console.log(keys);

// if ('radius' in circle){
//   console.log('circle has property');
// }
// //////////////////////////////////////////////////////////////

// // Abstraction
function Circle(radius) {
  this.radius = radius;
  let defaultLocation = { x: 0, y: 1 };
  let computeOptimumLocation = function(x) {
    return x * x;
  }
  this.draw = function() {
    console.log(computeOptimumLocation(2));
    console.log("draw$");
  };

  Object.defineProperty(this, 'defaultLocation', {
    get: function(){
      return defaultLocation;
    },

    set: function(value){
      defaultLocation = value;
    }
  })
}

const circle = new Circle(4);
console.log(circle);