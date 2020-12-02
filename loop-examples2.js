const jeopardyWinnings = {
    regularPlay: 2522700,
    watsonChalenge: 300000,
    tournamenOfChamps: 500000,
    battleOfTheDecade: 100000,
};

for(let win in jeopardyWinnings) {
// console.log(win)
console.log(`${win}: ${jeopardyWinnings[win]}`)
}

for(let prop in jeopardyWinnings) {
    console.log('prop key' + prop);
    console.log('prop value ' + jeopardyWinnings[prop])
}

let total = 0;

for (let prop in jeopardyWinnings) {
    total += jeopardyWinnings[prop];
}

console.log('Ken Jennings Total Winnings: ' + '$' +total)

// looping over keys in array
for(let k in [88,99,77,66] ) {
    console.log(k)
}