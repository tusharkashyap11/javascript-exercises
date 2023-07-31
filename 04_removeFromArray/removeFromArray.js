const removeFromArray = function(arr, ...args) {
    let array = [];
    for (element of arr) {
        if (args.indexOf(element) === -1) {
            array.push(element);
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
