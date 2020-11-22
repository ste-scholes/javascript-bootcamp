let navItem ={
    Truthy: 'code1.html',
    Logical: 'logical.html',
    'Arrays Methods': 'arrays-objects.html',
    Boolean: 'code.html',
    Code: 'code.html'
};

var navIt = function() {
    var output = '<ul id="nav">',
    myList = document.querySelectorAll('.nav');

    for(var key in arguments[0]) {
        output+= `<li class="nav"><a href="${navItem[key]}">${key}</a></li>`;
    }
    output+= '</ul>';

    for(var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(navItem);

