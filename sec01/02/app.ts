function addNum(n1: number, n2: number): number {
  return n1 + n2;
}

function printNumResult(num: number): void {
  console.log('Result: ' + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printNumResult(addNum(10, 12));

let combineValues: (a: number, b: number) => number;

combineValues = addNum;

console.log(combineValues(8, 8));

addAndHandle(10, 20, (result) => {
  console.log(result);
});
