// Debug the following code that removes negative values from an array

function removeNegatives(arr) {
    var newArray = []

    for(var i=0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            newArray.push(arr[i])
        }
    }
    return newArray;
}

var result = removeNegatives([3, 7, -23, 0, 2.5, -4]);
console.log(result);