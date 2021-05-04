describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 500;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new BouncyDancer(10, 30, timeBetweenSteps);
  });
  it('should have a jQuery $node object', function() {
    expect(bouncyDancer.$node).to.be.an.instanceof(jQuery);
  });







});