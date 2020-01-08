// intermediate function inheritance
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function Shape(color) {
  this.color = color;
}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.duplicate = function() {
  console.log("draw 4");
};

function Square(size) {
  this.size = size;
}

// intermediate inheritance
extend(Square, Shape);

Square.prototype.duplicate = function() {
  console.log("duplicate square");
};

// Square.prototype = Object.create(Shape.prototype);
// Square.prototype.constructor = Square;

const shapes = [new Circle(), new Square()];

for (let shape of shapes) {
  shape.duplicate();
}

const s = new Shape();
const c = new Circle(1, "red");
const sq = new Square(100);
