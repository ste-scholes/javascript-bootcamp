let menuItem ={
    Home: '/index.html',
    Variables: '/variable.html',
    Methods: '/methods.html',
    Boolean: '/booleanlogic.html',
    'If Else': '/if-else.html',
    'Arrays': '/const.html',
    'Objects': '/objects.html',
    'New Objects': '/objects/new-objects.html',
    Loops: '/loops.html',
    Functions: '/functions.html',
    DOM: '/dom/dom.html',
    Events: '/dom/events/index.html',
    Async: '/async/index.html',
    Requests: '/requests/index.html'
    
};

var menuIt = function() {
    var output = '<ul id="nav">',
    myList = document.querySelectorAll('.menu');

    for(var key in arguments[0]) {
        output+= `<li class="menu"><a href="${menuItem[key]}">${key}</a></li>`;
    }
    output+= '</ul>';

    for(var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(menuItem);



