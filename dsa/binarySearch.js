//Binary search which is divide and conquer
//TIME: BIG O(log n)

const num = [9, 11, 13, 15, 20, 27, 30, 32]

const searchBinary = (arr, target) => {
if(arr.length === 0) return -1;
  
  let left = 0;
  let right = arr.length-1;

  while(left <= right){
    let middle = Math.floor((left + right) / 2);

    if(arr[middle] > target){
      right = middle - 1;
    } else if(arr[middle] < target){
      left = middle + 1;
    } else {
      return middle;
    }
    
  }
  return -1;
}


console.log(searchBinary(num, 27))



















