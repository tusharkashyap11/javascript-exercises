const repeatString = function(str, num) {
    if (num < 0) return 'ERROR'
    repeatStr = ''; 
    for (let i = 0; i < num; i++) {
        repeatStr = repeatStr + str;
    } 
    return repeatStr;
};

// Do not edit below this line
module.exports = repeatString;
