let callNav = {
    "classList": "/dom/classlist.html#class",
    "getAttribute()": "/dom/get-set.html#get",
    "setAttribute()": "/dom/get-set.html#set",
    "appendChild()": "/dom/celement.html#child",
    "append()":  "/dom/celement.html#append",
    "prepend()":  "/dom/celement.html#prepend",
    "removeChild()": "/dom/remove.html#removecld",
    "remove()": "/dom/remove.html#remove",
    "innerText": "/dom/innertext.html#inner",
    "innerHTML": "/dom/innerhtml.html#innerhtml",
    "value": "/callback/sort.html",
    "parentElement": "/dom/siblings.html#parent",
    "children": "/dom/siblings.html#children",
    "nextSibling": "/dom/siblings.html",
    "previousSibling": "/dom/siblings.html",
    "style": "/dom/styles.html#styles",
    "forms": "/dom/forms.html#forms"
  
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