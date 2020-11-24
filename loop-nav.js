let loopNav ={
    'Loop Home - For Loops': 'loops.html',
    'For Loops & Arrays': 'loops-arrays.html',
   'Arrays and Objects':'objects-nested-arrays.html',
   'Arrays Equality': 'equality.html',
   
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


