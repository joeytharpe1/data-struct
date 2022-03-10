// find some of numbers in range of a number
// BIG O(1)

function sumRange(num){
  if(num === 1) return 1;
  return num + sumRange(num - 1);
}

console.log(sumRange(3))
/*
  return 3 + sumRange(2) bc 3-1 = 2
  then return 2 + sumRange(1) bc 2-1 = 1
  finally return our base case which is true because the num(1) does infact
  equals to 1 which is the base case
*/