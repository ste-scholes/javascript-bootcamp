const warriorsGames = [{
    awayTeam: {
        team: 'Golden State',
        points: 119,
        isWinner: true
    },
    homeTeam: {
        team: 'Houston',
        points: 106,
        isWinner: false
    }
},

{
    awayTeam: {
        team: 'Golden State',
        points: 105,
        isWinner: false
    },
    homeTeam: {
        team: 'Houston',
        points: 108,
        isWinner: true
    }

},

{
    awayTeam: {
        team: 'New York',
        points: 120,
        isWinner: true
    },
    homeTeam: {
        team: 'Golden State',
        points: 90,
        isWinner: false
    }

},

{
    awayTeam: {
        team: 'Golden State',
        points: 110,
        isWinner: true
    },
    homeTeam: {
        team: 'Chicago',
        points: 109,
        isWinner: false
    }

},

{
    awayTeam: {
        team: 'Golden State',
        points: 125,
        isWinner: true
    },
    homeTeam: {
        team: 'Washington',
        points: 106,
        isWinner: false
    }  
}]

const ulParent = document.createElement('ul');
for(let game of warriorsGames){
    const {homeTeam, awayTeam} = game;
    const gameLi = document.createElement('li');

    const {team:hTeam, points:hPoints} = homeTeam;
    const {team:aTeam, points:aPoints} = awayTeam;
    let scoreline;

    if(aPoints > hPoints) {
       scoreline = `<b>${aPoints}</b> - ${hPoints}`; 
    } else {
        scoreline = `${aPoints} - <b>${hPoints}</b>`; 
    }

    const warriors = hTeam ===  'Golden State' ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner?'win':'lose')

    const teamNames = `${aTeam} @ ${hTeam}`; // team names
    
    gameLi.innerHTML = `${teamNames} ${scoreline}`
    ulParent.appendChild(gameLi)
}

document.body.prepend(ulParent)