const firstReq = new XMLHttpRequest();

firstReq.addEventListener("load", function () {
  console.log("First works");
  const data = JSON.parse(this.responseText);
  console.log(data.results[0].films[0]);
  const filmURL = data.results[0].films[0];
  const filmReq = new XMLHttpRequest();
  filmReq.addEventListener("load", function () {
    console.log("second works");
    const filmData = JSON.parse(this.responseText);
    console.log(filmData)
//
const allLi = document.querySelectorAll('h2');
for (let newh2 of allLi){
    
    newh2.innerText = `${filmData.title}... ${filmData.opening_crawl}`
    }

//

  });
  filmReq.addEventListener("error", function (e) {
    console.log("Bugger", e);
  });
  filmReq.open("Get", filmURL);
  filmReq.send();
  // for(let planets of data.results)
  // console.log(planets.name, planets.population)
});
firstReq.addEventListener("error", (e) => {
  console.log("It failed");
});

firstReq.open("GET", "https://swapi.dev/api/planets/");
firstReq.send();
console.log("Request Sent");

