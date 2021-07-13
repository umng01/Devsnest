//Create 2 object and try to use call, apply and bind on them

//object 
var array = {
    name:"Alice", 
    age:"19", 
    sem:"04"
}

var myFunc= function(a,b,c){
    return "Name: " + this.name + ", Age: " + this.age + ", Semester: "
    + this.sem;
};

// use of call and this
console.log("Using 'Call' :");
console.log(myFunc.call(array, "Bob", "20", "07"));

// use of apply
var args = ["Bob","20","07"];
console.log("Using 'Apply' :");
console.log(myFunc.apply(array, args));

// use of bind
console.log("Using 'Bind':");
var binding = myFunc.bind(array);
console.log(binding("Bob", "20", "07"));