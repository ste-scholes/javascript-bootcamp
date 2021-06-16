let navObj ={
    'Promises': '/promise/promise.html',
    'Construct a Promise': '/promise/const.html',
    'Nodes setTimeout()': '/promise/settime.html',
    'Consuming Promises': '/promise/consume.html', 
    'Success Failure Functions': '/promise/success.html',
    'Catch()': 'catch.html',
    'Chaining Promises': 'chain.html',
    'Common Mistakes': 'mistake.html',
    'Promise.all()': 'all.html',
    'Review': 'prom-rev.html',
    'Async-Await': 'async.html',
    'Async-Functions': 'async-func.html'
   
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


