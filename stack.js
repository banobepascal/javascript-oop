const _count = new WeakMap();

class Stack {
  constructor() {
    _count.set(this, []);
  }

  push(obj) {
    _count.get(this).push(obj);
  }

  pop() {
    const pops = _count.get(this);
    if (pops.length === 0) {
      throw new Error("Stack is empty..");
    }

    return pops.pop();
  }

  peek() {
    const pops = _count.get(this);
    if (pops.length === 0) {
      throw new Error("Stack is empty..");
    }

    return pops[pops.length - 1];
  }

  get count() {
    return _count.get(this).length;
  }
}

const c = new Stack();
