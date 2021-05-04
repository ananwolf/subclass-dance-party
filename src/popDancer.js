var PopDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src = "img/Pop-Dancer.gif" class="dancer" width="200" height="200"></img>');
};

PopDancer.prototype = Object.create(Dancer.prototype);
PopDancer.prototype.constructor = PopDancer;

PopDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  this.$node.toggle();
  this.top = $('body').height() * Math.random();
  this.left = $('body').width() * Math.random();
  this.setPosition(this.top, this.left);

};
PopDancer.prototype.lineUp = function() {
  clearTimeout(this.timer);
  this.$node.toggle(true);
  this.$node.animate({left: '1000px'}, 8000);
};