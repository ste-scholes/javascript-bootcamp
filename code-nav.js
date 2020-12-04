let loopNav ={
    'Code': 'code.html',
    'For Loops & Arrays': 'loops-arrays.html',
   'Nested Loop':'nested-loop.html',
   'While Loop': 'while-loop.html',
   'For of - For in': 'for-loop.html'
   
};

var loopNa = function() {
    var output = '<ul id="loop-nav">',
    myList = document.querySelectorAll('.loop-nav');

    for(var key in arguments[0]) {
        output+= `<li class="loop-nav"><a href="${loopNav[key]}">${key}</a></li>`;
    }
    output+= '</ul>';

    for(var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(loopNav);


