ko.bindingProvider.instance.preprocessNode = function(node){
  // visible
  if (node.nodeType === Node.ELEMENT_NODE){
    if (node.getAttribute('data-visible')){
      node.setAttribute('data-bind', 'visible: ' + node.getAttribute('data-visible'));
    }
  }
  return null;
}
