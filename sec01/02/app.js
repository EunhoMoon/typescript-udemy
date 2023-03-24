function addNum(n1, n2) {
    return n1 + n2;
}
function printNumResult(num) {
    console.log('Result: ' + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printNumResult(addNum(10, 12));
var combineValues;
combineValues = addNum;
console.log(combineValues(8, 8));
console.log(addAndHandle(10, 20, function (result) {
    console.log(result);
    return result;
}));
