let navi ={
    "New Objects": "/objects/new-objects.html",
    'Rest':'/objects/rest.html',
    'Spread Function Calls': '/objects/spread.html',
    'Spread Array Literal': '/objects/spread-array.html',
    'Spread Object Literals': '/objects/spread-object.html',
    'This': '/objects/this.html',
    'Methods - Functions as properties on objects': '/objects/methods.html'

   
};

var navigate = function() {
    var output = '<ul id="inner-nav">',
    myList = document.querySelectorAll('.inner-nav');

    for(var key in arguments[0]) {
        output+= `<li class="inner-nav"><a href="${navi[key]}">${key}</a></li>`;
    }
    output+= '</ul>';

    for(var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(navi);


