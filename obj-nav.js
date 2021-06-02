let navObj ={
    'Objects Home': '/objects.html',
    'Adding Updating Objects': '/updateobj.html',
   'Arrays and Objects':'/objects-nested-arrays.html',
   'Arrays Equality': '/equality.html',
   'Pass by reference': '/obj/passby.html',
   'Objects - Looping through': '/obj/looping-obj.html',
   'This Keyword': '/obj/this.html',
   'Setters': '/obj/setter.html',
   'Factory': '/obj/factory.html',
   'Destructured': '/obj/destruct.html',
   'Built-in objects': '/obj/builtin.html',
   'Review': '/obj/review.html',
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


