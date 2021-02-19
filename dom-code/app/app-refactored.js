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
        team: 'Houston',
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
        team: 'Houston',
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
        team: 'Houston',
        points: 106,
        isWinner: false
    }  
}]


const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement('ul');

for(let game of games) {
    const gameLi = document.createElement('li');
    gameLi.innerHTML = getScoreLine(game);
    gameLi.classList.add(isWinner(game, targetTeam) ? 'win':'lose')
    ulParent.appendChild(gameLi);
}
    return ulParent;
};


const isWinner = ({homeTeam, awayTeam}, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner
    
 
    // gameLi.classList.add(warriors.isWinner ? 'win':'lose')
}

const getScoreLine = ({homeTeam, awayTeam}) => {
    const {team:hTeam, points:hPoints} = homeTeam;
    const {team:aTeam, points:aPoints} = awayTeam;
    const teamNames = `${aTeam} @ ${hTeam}`;
    let scoreline;

    if(aPoints > hPoints) {
       scoreline = `<b>${aPoints}</b> - ${hPoints}`; 
    } else {
        scoreline = `${aPoints} - <b>${hPoints}</b>`; 
    }
    return  `${teamNames} ${scoreline}`
};


const gsSection = document.querySelector('#gs');
const houstonSection = document.querySelector('#hr');

const gsChart = makeChart(warriorsGames, 'Golden State');
const hrChart = makeChart(warriorsGames, 'Houston');
gsSection.appendChild(gsChart)
houstonSection.appendChild(hrChart)
