// mixin function
function mixin(target, ...sources){
    Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log("Eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("Walking");
  }
};

const canSwim = {
    swim: function(){
        console.log('can swim');
    }
}

function Person() {}

function Duck() {}

mixin(Person.prototype, canEat, canWalk);
mixin(Duck.prototype, canWalk, canSwim, canEat);

const person = new Person();
console.log(person);

const duck = new Duck();
console.log(duck);
