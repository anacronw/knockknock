ko.knockknock = new RegExp('^data-(visible|text|html|css|style|attr|foreach|if|ifnot|with|click|event|submit|enable|disable|value|hasFocus|checked|options|selectedOptions|uniqueName|template)$');
ko.bindingProvider.instance.preprocessNode = function(node){
  if (node.nodeType === Node.ELEMENT_NODE){

    var bindingValues = node.getAttribute('data-bind') || '';
    for (var i = 0,len = node.attributes.length; i < len; i++){
      var knockknockBinding = ko.knockknock.exec(node.attributes[i].name)
      if (knockknockBinding){
        var koBinding = knockknockBinding[1];
        bindingValues += koBinding + ':' + node.getAttribute('data-'+koBinding) + ',';
      }
    }
    if (bindingValues !== node.getAttribute('data-bind'))
      node.setAttribute('data-bind', bindingValues)
  }
  return null;
}
