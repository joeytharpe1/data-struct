// find some of numbers in range of a number
// BIG O(1)

function sumRange(num){
  if(num === 1) return true;
  return num + sumRange(num - 1);
}

console.log(sumRange(3))