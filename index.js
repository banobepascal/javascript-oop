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

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1
  },

  draw() {
    console.log('draw');
  }
};

circle.draw();

