describe('#visible', function(){
  var viewModel;
  var template;  
  var ko
  beforeEach(function(done){
    fixtures.load('knockout.html', 'text.html', function(){
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
    viewModel.someText = ko.observable('woot!');
    ko.applyBindings(viewModel);
    $(template).should.have.text('woot!');
  })
})
