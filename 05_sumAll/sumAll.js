const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    let n = num1 > num2 ? num1 : num2;
    let sum = 0;
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        for (let i = num1 < num2 ? num1 : num2 ; i <= n; i++) {
            sum += i;
        }
        return sum;
    }
    return 'ERROR'
};

// Do not edit below this line
module.exports = sumAll;
