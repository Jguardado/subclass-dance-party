var MakeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top; 
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps
  //console.log(this.$node)
  this.step();
  var randomTop = Math.floor(Math.random()*500);
  var randomLeft = Math.floor(Math.random()*800);
  this.setPosition(randomTop, randomLeft);
};

MakeDancer.prototype.step = function (timeBetweenSteps) {
  //var toCall = this.step;
  //console.log(this)
  var dancer = this;
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  setTimeout(function(){
    this.step();
  }.bind(dancer), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function (top, left) {
  // body...

    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
}

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body


//var dancer1 = new MakeDancer()
//dancer1.step(500);
//dancer1.setPosition();





// // // Creates and returns a new dancer object that can step
// // var makeDancer = function(top, left, timeBetweenSteps){

// //   var dancer = {};

// //   // use jQuery to create an HTML <span> tag
// //   dancer.$node = $('<span class="dancer"></span>');


// //   dancer.step = function(){
// //     setTimeout(dancer.step, timeBetweenSteps);
// //   };





//   dancer.setPosition = function(top, left){
//   };


//   return dancer;
// };