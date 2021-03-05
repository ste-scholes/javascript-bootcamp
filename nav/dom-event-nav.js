let callNav = {
    "Bad Example": "/dom/events/example.html",
    "clicks": "/dom/classlist.html#class",
    "drags": "/dom/get-set.html#get",
    "drops": "/dom/get-set.html#set",
    "hovers": "/dom/celement.html#child",
    "scrolls":  "/dom/celement.html#append",
    "form sumission":  "/dom/celement.html#prepend",
    "key presses": "/dom/events/key.html",
    "focus blur": "/dom/remove.html#remove",
    "mousewheel": "/dom/innertext.html#inner",
    "copying": "/dom/innerhtml.html#innerhtml",
    "pasting": "/callback/sort.html",
    "audio start": "/dom/siblings.html#parent",
    "screen resize": "/dom/siblings.html#children",
    "printing": "/dom/siblings.html",
    "Try to click exercise": "/dom/events/trytoclick.html",
    "Try to click Code": "/dom/events/trytoclick-exp.html",
    "Pick a color": "/dom/events/pickcode.html",
    "Coin Game": "/dom/events/game/code.html",
    "Form Example": "/dom/events/form-example.html"

    
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