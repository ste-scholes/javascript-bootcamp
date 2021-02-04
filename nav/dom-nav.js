let navi ={
    "DOM": "/dom/dom.html",
    'Example-1':'/dom/page1.html',
    'Properties & Methods': '/dom/properties.html'

 

   
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