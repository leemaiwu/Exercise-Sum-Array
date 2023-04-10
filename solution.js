function sum (numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i ++) {
       total = total + numbers[i]
    }
    return total
}

console.log(sum([1, 5.2, 4, 0, -1]))


// Alternate Solution

function sumNum(numbers) {
    return numbers.reduce((i, k) => i + k, 0)
}

console.log(sumNum([1, 5.2, 4, 0, -1]))