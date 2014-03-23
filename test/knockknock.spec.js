describe('knockknock', function(){
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
  describe('#visible', function(){
    it('is visible when observable is true', function(){
      template.setAttribute('data-visible', 'isVisible');
      viewModel.isVisible = ko.observable(true);
      ko.applyBindings(viewModel);
      $(template).should.not.be.hidden;
    })
    it('is not visible when observable is false', function(){
      template.setAttribute('data-visible', 'isVisible');
      viewModel.isVisible = ko.observable(false);
      ko.applyBindings(viewModel);
      $(template).should.be.hidden;
    });
  })
  describe('#text', function(){
    it('puts the observable text in the element', function(){
      template.setAttribute('data-text', 'someText');
      viewModel.someText = ko.observable('woot!');
      ko.applyBindings(viewModel);
      $(template).should.have.text('woot!');
    })
  });
  describe('#html', function(){
    it('puts observable html string in the element', function(){
      template.setAttribute('data-html', 'someHTML');
      viewModel.someHTML = ko.observable('<a href="#">hot link</a>');
      ko.applyBindings(viewModel);
      $(template).should.have('a')
      $(template).should.contain('hot link');
    })
  });
  describe('#css', function(){
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
  });
  describe('#style', function(){
    it('displays style bindings', function(){
      template.setAttribute('data-style-display', 'thisShouldBeColored');
      viewModel.thisShouldBeColored = ko.observable('inline');
      ko.applyBindings(viewModel);
      $(template).should.have.css('display', 'inline');
    })
  });
})
