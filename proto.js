function Circle (radius) {
    // instance members
    this.radius = radius;
    this.move = function(){
        this.draw();
        console.log('move');
    }
}

// prototype members
Circle.prototype.draw = function(){
    console.log('draw 2');
}

const c1 = new Circle(10)
const c2 = new Circle(10)

Circle.prototype.toString = function(){
    return 'You are witnessing a radius ' + this.radius;
};

// returns ownProperty members
console.log(Object.keys(c1));

// returns all members (ownProperty + protoypes)
for (let key in c2) {
    console.log(key);
}