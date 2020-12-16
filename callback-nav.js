let callNav = {
    "Arrow Functions ": "/arrow-functions.html#arrow",
    "for each": "/array-callback.html#for",
    "map": "/callback/map.html",
    "filter": "/callback/filter.html",
    "find": "/callback/find.html",
    "reduce": "/callback.html",
    some: "/callback/some.html#some",
    every: "/callback/some.html"
  
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