const reduction = [3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}); 

console.log(reduction)

const nums = [3,4,5,6,7];

const product = nums.reduce((total, currentVal) => {
    return total * currentVal;
});

console.log(product);

// grades example

const grades = [87,64,96,92,88,99,73,70,64];

const maxGrade = grades.reduce((max, currVal) => {
    if(currVal > max) return currVal;
    return max;
})

console.log(maxGrade)

// refactored above to use Math.max method

const maxGrade2 = grades.reduce((max, currVal) => {
    return Math.max(max, currVal)
})

console.log(maxGrade2)



// refactored to use Math.min and implicit return 

const minGrade = grades.reduce((min, current) => (
    Math.min(min, current)
));

console.log(minGrade) // 64 lowest number in array

console.log(Math.max(98,45)) // returns 45765759 the largest number!

// initial value

const addUp = [10,20,30,40,50];

const addArray = addUp.reduce((sum, currVal) => {
    return sum + currVal;
},1000) // initialise at this number

// so the above starts at 1000 and then adds 150 to it's total

console.log(addArray)