var BouncyDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src = "img/bouncy.gif" class="dancer" width="200" height="200"></img>');
};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

  this.top = $('body').height() * Math.random();
  this.left = $('body').width() * Math.random();
  this.setPosition(this.top, this.left);
};

BouncyDancer.prototype.lineUp = function() {
  clearTimeout(this.timer);
  this.$node.toggle(true);
  this.$node.animate({left: '550px'}, 8000);
};
