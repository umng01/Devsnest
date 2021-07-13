// Write a JavaScript function to check whether an `input` is an array or not
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// True

var inp1="w3schools";
var inp2=[1, 2, 4, 0];
is_array(inp1);
is_array(inp2);
function is_array(inp)
{
    console.log(Array.isArray(inp));
}