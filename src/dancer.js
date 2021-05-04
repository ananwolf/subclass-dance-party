// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = $('<span class="dancer"></span>');
  this.timer;
  this.step();
  this.setPosition(top, left);
};

// use jQuery to create an HTML <span> tag

Dancer.prototype.step = function() {
  this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.lineUp = function () {
  clearTimeout(this.timer);
  this.$node.toggle(true);
  this.$node.animate({left: '100px'}, 5000);
  // this.setPosition(top, left);
};



