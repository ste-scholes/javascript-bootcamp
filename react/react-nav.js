let navObj ={
    Intro: '/react/index.html',
    'JSX If Startements':'/react/jsxif.html',
    'ReactDOM.render()': '/react/react.html',
   
   
};

var navOb = function() {
    var output = '<ul id="nav">',
    myList = document.querySelectorAll('.obj-nav');

    for(var key in arguments[0]) {
        output+= `<li class="prom-nav"><a href="${navObj[key]}">${key}</a></li>`;
    }
    output+= '</ul>';

    for(var i = myList.length - 1; i >= 0; i--) {
        myList[i].innerHTML = output;
    };
}(navObj);


