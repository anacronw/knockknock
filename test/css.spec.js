describe('#css', function(){
  var viewModel;
  var template;  
  var ko
  beforeEach(function(done){
    fixtures.load('knockout.html', 'template.html', function(){
      viewModel = fixtures.window().viewModel;
      ko = fixtures.window().ko;
      template = fixtures.window().document.getElementById('template');
      done();
    });
  })
  afterEach(function(){
    fixtures.cleanUp();
  })
  it('displays dynamic css classes', function(){
    template.setAttribute('data-css', 'someCSS');
    viewModel.someCSS = ko.observable('profitWarning');
    ko.applyBindings(viewModel);
    $(template).should.have.class('profitWarning');
  })
  it('displays static classes', function(){
    template.setAttribute('data-css-profitwarning', 'showProfits')
    viewModel.showProfits = ko.observable(true);
    ko.applyBindings(viewModel);
    $(template).should.have.class('profitwarning');
  });
  it('displays multiple static classes', function(){
    template.setAttribute('data-css-profitwarning', 'showProfits');
    template.setAttribute('data-css-losswarning', 'showLoss');

    viewModel.showProfits = ko.observable(true);
    viewModel.showLoss = ko.observable(true);

    ko.applyBindings(viewModel);

    $(template).should.have.class('profitwarning');
    $(template).should.have.class('losswarning');
  });
})
