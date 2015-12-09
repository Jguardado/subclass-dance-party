var makeBlinkyDancer = function (top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}

makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function (timeBetweenSteps){
  MakeDancer.prototype.step.call(this);
  var blinkyImage = "http://gifdanceparty.giphy.com/dancers/twerk.gif";
  

  // this.$node.toggle();
  this.$node.css({"background": "url(http://gifdanceparty.giphy.com/dancers/twerk.gif) no-repeat ",
                  // "background-size": "cover",
                  "border": "none", 
                  "height": "500px",
                  "width": "250px"
                    });
}




