var BreakDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

BreakDancer.prototype = Object.create(MakeDancer.prototype);

BreakDancer.prototype.constructor = BreakDancer;

BreakDancer.prototype.step = function (timeBetweenSteps){
  // make dance dance in a line
  this.$node.toggle();
  MakeDancer.prototype.step.call(this);
};

