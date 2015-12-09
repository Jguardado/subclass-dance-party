var MakeDancer = function (top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top; 
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps
  this.step();
  this.randomTop = Math.floor(Math.random()*500);
  this.randomLeft = Math.floor(Math.random()*800);
  this.setPosition(this.randomTop, this.randomLeft);
};

MakeDancer.prototype.step = function (timeBetweenSteps) {
 
  var dancer = this;

  setTimeout(function(){
    this.step();
  }.bind(dancer), this.timeBetweenSteps);
};


MakeDancer.prototype.setPosition = function (top, left) {
 
    var styleSettings = {
      top: top,
      left: left
    };

    this.$node.css(styleSettings);
}

MakeDancer.prototype.lineUp = function (top, left) {
this.left = 250; 
this.setPosition(this.randomTop, this.left)
}

