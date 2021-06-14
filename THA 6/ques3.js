//Write a JavaScript program to get the length of a JavaScript object.  
//Sample object : var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
Object.size = function(Myobj) {
    var len = 0, i;
    for (i in Myobj) {
        if (Myobj.hasOwnProperty(i)) len++;
    }
    return len;
};

var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
var len = Object.size(student);
console.log('Size of student : '+len);