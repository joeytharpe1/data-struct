/* write a function which accepts an array of int and a number called num. the function should calculate the maxium sum of n consecutive elements in the array 

TIME- BIG O(n)
*/

function maxSubArraySum(arr, num){
  if(num > arr.length) return null; //edge case
  let tempSum = 0;
  let maxSum = 0;
  for(let i = 0; i < num; i++){ //loop to add all numbers to maxsum variable
    maxSum = arr[i]; //maxsum = arr[1]....
  }
  tempSum = maxSum; //set maxsum to tempsum
  for(let i = num; i < arr.length; i++){ // set index to num variable
    tempSum = tempSum - arr[i-num] + arr[i]; // set new temp variable
     //return the max of maxSum & tempSum and update maxsum if temsum is larger           than max
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum; //finally return maxSum
}




console.log(maxSubArraySum([1,2,5,2,8,1,5], 3));






