// brings back data from api
// loops through planets
// logs plantes.name

// example 1

// const data = fetch("https://swapi.dev/api/planets/")
// .then((responce) => {
//     if(!responce.ok) { // if responce fails log error else continue
//         console.log('Connection failed: Not Status: 200', responce.status)
//     } else {
//   responce.json().then((data) => {
//      for(let planets of data.results) {
//          console.log(planets.name)
//      }
//   })
//     }
// })

// // fail catch
// .catch((err) => {
//     console.log('Error')
//     console.log(err)
// })

// example 2 using throw on error

const data = fetch("https://swapi.dev/api/planets/")
.then((responce) => {
    if(!responce.ok)  // if responce fails it throw an error or it continue
      throw new Error(`Status Code Error: ${responce.status}`)
    return responce.json()
  })


//   .then((data) => {
//     for(let planets of data.results) {
//         console.log(planets.name)
//         console.log(planets)
//     }
// })

.then((data) => {
    console.log('Fetched planets (10)')
    const filmURL = data.results[0].films[0]
    
    return fetch(filmURL)
})
.then((responce) => {
    if (!responce.ok)
        throw new Error(`Status 2 Error: ${responce.status}`)
        return responce.json()
})
.then((data) => {
    console.log('Fetched first film')
    document.querySelector('#title').innerHTML = data.title
    document.querySelector('#crawl').innerHTML = data.opening_crawl
    document.querySelector('#planets').innerHTML = data.results.plantes
    console.log(data)
    
})

// fail catch
.catch((err) => {
    console.log('Fail')
    console.log(err)
});

