let navi ={
    "Default Params": "/misc/default-params.html",
    'Rest':'/misc/rest.html',
    'Spread Function Calls': '/misc/spread.html',
    'Spread Array Literal': '/misc/spread-array.html',
    'Spread Object Literals': '/misc/spread-object.html',
    'Destructuring': '/misc/destructuring.html'

   
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


