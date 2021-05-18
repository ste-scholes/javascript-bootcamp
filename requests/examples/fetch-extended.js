const data = fetch("https://swapi.dev/api/planets/")
.then((responce) => {
    if(!responce.ok)  // if responce fails it throw an error or it continue
      throw new Error(`Status Code Error: ${responce.status}`)
    return responce.json()
  })

.then((data) => {
    console.log('Fetched planets (10)')
    for(let planet of data.results){
        console.log(planet.name)
    }

    const nextURL = data.next;
    
    return fetch(nextURL);
})
.then((responce) => {
    if (!responce.ok)
        throw new Error(`Status 2 Error: ${responce.status}`)
        return responce.json()
})
.then((data) => {
    console.log('Fetched next 10 planets')
    for(let planet of data.results){
        console.log(planet.name)
        const world = data.results[2]
       
    
    document.querySelector('#title').innerHTML = world.name
    document.querySelector('#crawl').innerHTML = world.climate
    document.querySelector('#planets').innerHTML = world.terrain
    // console.log(data)
}
})

// fail error catch
.catch((err) => {
    console.log('Fail')
    console.log(err)
});