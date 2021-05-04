// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  // this.left = left;
  // this.right = right;
  // why we want to invoke the step, set function here
  this.step();
  this.setPosition(top, left);
};

// use jQuery to create an HTML <span> tag


Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function () {
  this.setPosition(top, left);
};



