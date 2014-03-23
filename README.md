knockknock
==========

Tired of knockout's overloading of the `data-bind` attribute?  Convert bindings that look like this:

```
<div data-bind="text: someText, class: {alert: showAlert, loading: showLoading}"></div>
```
into this:
```
<div data-text="someText" data-class-alert="showAlert" data-class-loading="showLoading"></div>
```
