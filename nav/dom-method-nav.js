let callNav = {
    "classList": "/dom/classlist.html",
    "getAttribute()": "/dom/get-set.html",
    "setAttribute()": "/dom/get-set.html",
    "appendChild()": "/dom/celement.html#child",
    "append()":  "/dom/celement.html#append",
    "prepend()":  "/dom/celement.html#prepend",
    "removeChild()": "/dom/remove.html",
    "remove()": "/dom/remove.html",
    "innerText": "/dom/innertext.html",
    "innerHTML": "/dom/innerhtml.html",
    "value": "/callback/sort.html",
    "parentElement": "/dom/siblings.html",
    "children": "/dom/siblings.html",
    "nextSibling": "/dom/siblings.html",
    "previousSibling": "/dom/siblings.html",
    "style": "/dom/styles.html",
    "forms": "/dom/forms.html"
  
  };
  
  var callNa = function() {
      var output = '<ul id="call-nav">',
      myList = document.querySelectorAll('.call-nav');
  
      for(var key in arguments[0]) {
          output+= `<li class="call-nav"><a href="${callNav[key]}">${key}</a></li>`;
      }
      output+= '</ul>';
  
      for(var i = myList.length - 1; i >= 0; i--) {
          myList[i].innerHTML = output;
      };
  }(callNav);