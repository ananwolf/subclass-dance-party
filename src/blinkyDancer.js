var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  this.top = $('body').height() * Math.random();
  this.left = $('body').width() * Math.random();
  this.setPosition(this.top, this.left);


  // if (this.$node.css('border') === '10px solid rgb(255, 255, 0)' && this.$node.css('display') === 'block') {
  //   this.$node.css('border', '10px solid blue');
  // } else if (this.$node.css('display') === 'block') {
  //   this.$node.css('border', '10px solid rgb(255, 255, 0)');
  // }
};

