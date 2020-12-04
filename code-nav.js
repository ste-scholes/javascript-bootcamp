let loopNav ={
    'Code': 'code.html',
    'Average': 'code-avg.html',
    'Pangram': 'code-pangram.html',
    'Get Card': 'code-cards.html'
   
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


