


function avg(numbers) {
    let total = 0;
    for(i = 0; i < numbers.length; i++) {
        total += numbers[i]
    }
    return avg = total /numbers.length
}

console.log('Average is: ' + avg([75,99,29,49,53]));

function average(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total / arr.length;
}

console.log(average([75,76,80,95,100]))