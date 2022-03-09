//two Pointers - count unique values in array

const num = [1,1,2,3,3,4,5,6,6,7]

const countUniqueValues = (arr) => {
 let i = 0; //set index i at 0
  //loop through arr with second index at 1
  for(let j = 1; j < arr.length; j++){
    /* check if arr[i] and arr[j] are not equal 
      if not then increment the index at 0 and set index at 0(arr[i]) = index at 1 (arr[j])  
    */
    if(arr[i] !== arr[j]){
      i++;
      arr[i] = arr[j];
    }
  }
  //if arr[i] and arr[j] are equal then just add 1 to i
  return i + 1
}

console.log("unique values: ");
console.log(countUniqueValues(num));



















