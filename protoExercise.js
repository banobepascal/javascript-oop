function Stopwatch() {
  let startTime, endTime, running, duration;

  Object.defineProperty(this, "duration", {
    get: function() {
      return duration;
    }
  });

  Object.defineProperty(this, "startTime", {
    get: function() {
      return startTime;
    }
  });

  Object.defineProperty(this, "endTime", {
    get: function() {
      return endTime;
    }
  });

  Object.defineProperty(this, "running", {
    get: function() {
      return running;
    }
  });
}

Stopwatch.prototype.start = function() {
  if (this.running) {
    throw new Error("stopwatch is running");
  }

  this.running = true;
  this.startTime = new Date();
};

Stopwatch.prototype.stop = function() {
  if (!this.running) {
    throw new Error("stopwatch is not running");
  }

  this.running = false;
  this.endTime = new Date();
  const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
  this.duration += seconds;
};

Stopwatch.prototype.reset = function() {
  this.running = false;
  this.startTime = null;
  this.endTime = null;
  this.duration = 0;
};

const sw = new Stopwatch();