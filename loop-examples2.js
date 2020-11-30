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