/* write a function which accepts an array of int and a number called num. the function should calculate the maxium sum of n consecutive elements in the array */

function maxSubArraySum(arr, num){
  if(num > arr.length) return null;
  let tempSum = 0;
  let maxSum = 0;
  for(let i = 0; i < num; i++){
    maxSum = arr[i];
  }
  tempSum = maxSum;
  for(let i = num; i < arr.length; i++){
    tempSum = tempSum - arr[i-num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}




console.log(maxSubArraySum([1,2,5,2,8,1,5], 3));






