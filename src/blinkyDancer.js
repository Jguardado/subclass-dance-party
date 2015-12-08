var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  
  //this.step.callCount = 0;  
  //this.oldStep = this.step
  //var oldStep = this.step;
}
//debugger;
makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function (timeBetweenSteps){
  //

    // call the old version of step at the beginning of any call to this new version of step
  
  this.$node.toggle();
  // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  MakeDancer.prototype.step.call(this);
}



// makeBlinkyDancer.prototype.dance = function(timeBetweenSteps){
//   setTimeout(oldStep, 100);
  

//   //setTimeout(this.step, timeBetweenSteps);
// }
//var blinkyDancer = new makeBlinkyDancer();
//var blinkyDancer = new makeBlinkyDancer(10, 20, 1000);

//console.log(blinkyDancer.callCount)














// var makeBlinkyDancer = function(top, left, timeBetweenSteps){
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps);



//   blinkyDancer.step = function(){
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer;
// };