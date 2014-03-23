describe('#html', function(){
  var viewModel;
  var template;  
  var ko
  beforeEach(function(done){
    fixtures.load('knockout.html', 'template.html', function(){
      viewModel = fixtures.window().viewModel;
      ko = fixtures.window().ko;
      template = fixtures.window().document.getElementById('template');
      template.setAttribute('data-html', 'someHTML');
      done();
    });
  })
  afterEach(function(){
    fixtures.cleanUp();
  })
  it('puts observable html string in the element', function(){
    viewModel.someHTML = ko.observable('<a href="#">hot link</a>');
    ko.applyBindings(viewModel);
    $(template).should.have('a')
    $(template).should.contain('hot link');
  })
})
