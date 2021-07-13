// Write a JavaScript function to clone an array
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

var arr1 = [1, 2, 4, 0];
 var arr2= [1, 2, [4, 0]];
  
 array_clone(arr1);
 array_clone(arr2);

 function array_clone(arr)
 {
     var ans=arr;
     console.log(ans);
 }