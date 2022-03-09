//two Pointers - count unique values in array must be sorted
//time: big o(n)

const num = [1,1,2,3,3,4,5,6,6,7]

const countUniqueValues = (arr) => {
 let i = 0; //set index/pointer i at 0
  //loop through arr with second pointer at 1
  for(let j = 1; j < arr.length; j++){
    /* check if arr[i] and arr[j] are not equal 
      if not then increment the index at 0 and set pointer at 0(arr[i]) = pointer at 1 (arr[j])  
    */
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  //if arr[i] and arr[j] are equal then just add 1 to i pointer
  return i + 1
}

console.log("unique values: ");
console.log(countUniqueValues(num));



















