// function Circle(radius) {
//     this.radius = radius;

//     this.draw = function(){
//         console.log('draw 3');
//     }
// }
// ////////////////////////////////////////////////////////////////////////

// class Circle {
//   constructor(radius) {
//     this.radius = radius;
//     this.move = function() {
//       console.log("move circle");
//     };
//   }

//   // instance method
//   draw() {
//     console.log("draw circle");
//   }

//   // static method
//   static raw(x) {
//     console.log("raw circle " + x);
//   }
// }

// const c = new Circle(1);
// /////////////////////////////////////////////////////////////////////

// // abstraction with symbols
// const _radius = Symbol();
// const _draw = Symbol();

// class Circle {
//   constructor(radius) {
//     this[_radius] = radius;
//   }

//   [_draw]() {}
// }

// const c = new Circle(1);
// //////////////////////////////////////////////////////////////////

// abstraction with weak maps
// const _radius = new WeakMap();
// const _move = new WeakMap();

// class Circle {
//   constructor(radius) {
//     _radius.set(this, radius);
//     _move.set(this, () => {
//       console.log("moving", this);
//     });
//   }

//   get draw() {
//     console.log(_radius.get(this));
//     _move.get(this)();
//   }

//   get radius() {
//     return _radius.get(this);

//   }

//   set radius(value) {
//     if(value <= 1) throw new Error('Circle has a radius')
//     return _radius.get(this, value);
//   }
// }

// const c = new Circle(1);
// //////////////////////////////////////////////////////////////

class Shape {
  constructor(color) {
    this.color = color;
  }
  
  move() {
    console.log("move shape");
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  draw() {
    console.log("draw circle");
  }
}

const c = new Circle('red', 1);
// ///////////////////////////////////////////////////////////////