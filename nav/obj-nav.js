let navi ={
    "Adv Objects": "/objects/new-objects.html",
    'Privacy':'/objects/privacy.html',
    'Getter': '/objects/getter.html',
    'Setter': '/objects/setter.html',
    'Spread Object Literals': '/objects/spread-object.html',
    'This': '/objects/this.html',
    'Methods - Functions as properties on objects': '/objects/methods.html',
    Review: '/objects/review.html '

   
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


