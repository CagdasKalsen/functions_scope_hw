// 1.1. What is the difference between a parameter and an argument?
An argument is a passed value in a

function, A paramater is a variable that can be used to declare a

function...function(prmtr) { ARGUMENT }-- -- > prmtr(PARAMATER)
    // 1.2. Within a function, what is the difference between return and console.log?
RETURN will store the argument and can be used within the

function.Console.log will display the result from the

function.
// 1. 3. What are the implications of the ability of a function to return a value?
First we need to declare a variable, use them in a

function, and we can use
return or console.log
for result



// 2. calculateCube


function calculateCube(num) {
    return num * num * num
}
console.log(calculateCube(8))

// 3. isAVowel

function isAVowel(letter) {

    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        return true
    } else if (letter === 'A' || letter === 'E ' || letter === 'I' || letter === '0' || letter === 'U') {
        return true
    } else {
        return false
    }
}
console.log(isAVowel('A'))
console.log(isAVowel('b'))
console.log(isAVowel('e'))


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let array = []
    array.push(word1.length)
    array.push(word2.length)
    return array
}
console.log(getTwoLengths("Tiger", "Supercalifragilisticexpialidocious"))

// 5. sumArray



function sumArray(arr) {
    let total = 0
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}
console.log(sumArray([1, 2, 3, 5]))



// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 0; i < num + 1; i++) {
        if (num < 2 || Math.sqrt(num) % 1 === 0) {
            return false
        } else {
            return true
        }
    }
}
console.log(checkPrime(7))
console.log(checkPrime(36))
console.log(checkPrime(125))



// 6.2 printPrimes


// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (let i = 0; i <= num; i++) {
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}
console.log(printPrimes(9))





// 7. printLongestWord
function printLongestWord(arr) {
    let word = ''

    for (let i = 0; i < arr.length; i++) {
        if (word.length < arr[i].length) {
            word = arr[i]
        }
    }
    return word
}
console.log(printLongestWord(['hello', 'hi', 'greetings']))
    // BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

// 9. findNeedle
function findNeedle(arr) {
    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};