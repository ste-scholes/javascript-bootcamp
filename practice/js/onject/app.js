const cat = {
    name: "Jasper",
    temper: "Horrible",
    nickname: "Shiddy Chooce",
    img: "https://images.unsplash.com/photo-1581200459935-685903de7d62?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1227&q=80"
};

document.querySelector(".animal").innerHTML = `<div class="card"><p>Name: ${cat.name}</p> <p>Temprement: ${cat.temper}</p> <p>Nickname: ${cat.nickname}</p> <div><img src="${cat.img} title="ponce"/></div></div>`

console.log(cat.name)