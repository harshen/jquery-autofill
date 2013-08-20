[jquery-autofill Plugin](http://plugins.jquery.com/autofill/)- jQuery plugin for autofilling text input fields from another text input fields.
===============================

## <a id="Introduction"></a>Introduction

**Autofill** is a jQuery plugin for autofilling textboxes or textarea from another textboxes or textareas.

## <a id="Overview"></a>Overview

### Plugin Features

+ Clone (copy) the text from one textbox box to another text box when the first textbox loses focus.
+ Clone (copy) the text from one textarea to another textarea when the first textarea loses focus.
+ Specify whether to override the input field everytime or one time via an external option.
+ Specify the Id of the input field where another input field is to be cloned.

### Options

```
fieldId
```

  Use this option to provide the Id of the field where cloning (copying) will take place. When not specified, by default it takes 
the id of the field as "fieldId_copy" where fieldId is the Id of the field on which you called the autofill function of the 
plugin i.e it is the input field required to be cloned.

```
overrideFieldEverytime
```
  Use this option to provide the feature of whether you want to override or clone the input field everytime when the input field
which is to be cloned is changed OR you want that the input field should be cloned only for the first time. 
  It takes two parameters 
  
  1) true - Indicating input field cloned everytime.
  2) false - Indicating input field cloned for only the first time.
  
  By default it is 'false'.

Refer the demos for more clarity.

### License
Copyright (c) 2013 Harshen Pandey
Licensed under the MIT and GPLv3 license.
