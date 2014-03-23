describe('#visible', function(){
  var viewModel;
  var template;  
  var ko
  beforeEach(function(done){
    fixtures.load('knockout.html', 'visible.html', function(){
      viewModel = fixtures.window().viewModel;
      ko = fixtures.window().ko;
      template = fixtures.window().document.getElementById('template');
      done();
    });
  })
  afterEach(function(){
    fixtures.cleanUp();
  })
  it('is visible when observable is true', function(){
    viewModel.isVisible = ko.observable(true);
    ko.applyBindings(viewModel);
    $(template).should.not.be.hidden;
  })
  it('is not visible when observable is false', function(){
    viewModel.isVisible = ko.observable(false);
    ko.applyBindings(viewModel);
    $(template).should.be.hidden;
  });
})
