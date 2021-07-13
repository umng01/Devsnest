// Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
function frequent(x)
{
    if(x.length == 0)
        return null;
    var mySet = {};
    var maxEl = arr[0], count = 1;
    for(var i = 0; i < arr.length; i++){
        var j = arr[i];
        if(mySet[j] == null)
            mySet[j] = 1;
        else
            mySet[j]++;  
            
        if(mySet[j] > count){
            maxEl = j;
            count = mySet[j];
        }
    }
    return (`${maxEl} (${count} times)`);
}

console.log(frequent(arr));

