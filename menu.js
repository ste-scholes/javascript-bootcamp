let menuItem ={
    Home: 'index.html',
    Variables: 'variable.html',
    Methods: 'methods.html',
    Boolean: 'booleanlogic.html',
    'If Else': 'code.html',
    'Data Arrays': 'const.html',
    'Objects Keys': 'objects.html',
    Loops: 'loops.html'
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



