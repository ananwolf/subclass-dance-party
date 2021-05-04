describe('popDancer', function() {

  var popDancer, clock;
  var timeBetweenSteps = 50;
  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = new PopDancer(20, 30, timeBetweenSteps);
  });
  it('should have a jQuery $node object', function() {
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });







});