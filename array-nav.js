let navi ={
    'Arrays': 'const.html',
    'Objects & Methods': 'arrays-objects.html',
    'Array Callback Methods': 'array-callback.html',

   
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


// map
// double values
const numb = [20,21,22,23,24,25,26,27];
const words = ['asap','byob','rsvp','diy'];

const double = numb.map(function(num){
    console.log(num * 2);
})

console.log(double);