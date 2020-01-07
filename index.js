// // procedural programming
// let baseSalary = 30000;
// let overtime = 10;
// let rate = 20;

// function getWage(baseSalary, overtime, rate) {
//   return baseSalary + overtime * rate;
// }

// console.log(getWage(30000, 10, 20));

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

// Factory function
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw4");
    }
  };
}

const circle = createCircle(2);
console.log(circle);

// constructor functions
function Circle(radius) {
  this.radius = radius;
  this.draw = function() {
    console.log('draw');
  }
}

const another = new Circle()
