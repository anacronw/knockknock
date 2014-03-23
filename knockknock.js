ko.knockknock = new RegExp('^data-(visible|text|html|css|style|attr|foreach|if|ifnot|with|click|event|submit|enable|disable|value|hasFocus|checked|options|selectedOptions|uniqueName|template)(?:-(\\w+))?');
ko.bindingProvider.instance.preprocessNode = function(node){
  if (node.nodeType === Node.ELEMENT_NODE){

    var bindingValues = node.getAttribute('data-bind') || '';
    var hasBindings = false;
    var bindingMap = {};
    for (var i = 0,len = node.attributes.length; i < len; i++){
      var knockknockBinding = ko.knockknock.exec(node.attributes[i].name)
      if (knockknockBinding){
        hasBindings = true;
        var bindingName = knockknockBinding[1];
        var bindingAttr = knockknockBinding[2];

        if (bindingAttr) {
          bindingMap[bindingName] = bindingMap[bindingName] || {};
          bindingMap[bindingName][bindingAttr] = node.getAttribute(node.attributes[i].name);
        } else {
          bindingMap[bindingName] = node.getAttribute(node.attributes[i].name);
        }
      }
    }
    if (hasBindings) {
      for (var bindingName in bindingMap){
        if (typeof bindingMap[bindingName] === 'string')
          bindingValues += bindingName + ':' + bindingMap[bindingName]
        else {
          bindingValues += bindingName + ':{'
          for (var bindingAttr in bindingMap[bindingName])
            bindingValues +=  bindingAttr + ':'  + bindingMap[bindingName][bindingAttr] + ','
          bindingValues += '}'
        }
        bindingValues += ','
      }
      node.setAttribute('data-bind', bindingValues);
    }
  }
  return null;
}
