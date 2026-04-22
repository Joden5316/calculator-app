// 1–3: addTwoAndSeven function
function addTwoAndSeven() {
    return 2 + 7;
}
console.log(addTwoAndSeven()); // 9

// 4: addThreeAndFour function
function addThreeAndFour() {
    return 3 + 4;
}
console.log(addThreeAndFour()); // 7

// 6–9: reusable function (calculateSum)
function calculateSum(num1, num2) {
    return num1 + num2;
}

console.log(calculateSum(2, 5));   // 7
console.log(calculateSum(10, 10)); // 20
console.log(calculateSum(5, 5));   // 10

// 10–11: subtraction
function calculateDifference(num1, num2) {
    return num1 - num2;
}

console.log(calculateDifference(22, 5)); // 17
console.log(calculateDifference(12, 1)); // 11
console.log(calculateDifference(17, 9)); // 8

// 12: multiplication
function calculateProduct(num1, num2) {
    return num1 * num2;
}

console.log(calculateProduct(13, 5)); // 65

// 13–15: division with error handling
function calculateQuotient(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

console.log(calculateQuotient(7, 11)); // result
console.log(calculateQuotient(3, 0));  // Error

// 16: square function
function calculateSquare(num) {
    return num ** 2;
}

console.log(calculateSquare(5)); // 25
