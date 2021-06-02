let navObj ={
    'Key Points': '/classes/key.html',
    'Class': '/classes/class.html',
    'Constructor': '/classes/construct.html',
    'Instance': '/classes/instance.html',
    Methods: '/classes/methods.html',
    'Method Calls': 'calls.html',
    'Inheritence': 'inheritence.html',
   
};

var navOb = function() {
    var output = '<ul id="obj-nav">',
    myList = document.querySelectorAll('.obj-nav');

    for(var key in arguments[0]) {
        output+= `<li class="obj-nav"><a href="${navObj[key]}">${key}</a></li>`;
    }
    output+= '</ul>';

    for(var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(navObj);


