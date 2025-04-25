

//creating an array
let arr =["Virat","Rohit","Dhone","Jadeja"];

//accessing an array
console.log(arr[0]);

//changing an array element
arr[2]="Raina";
console.log(arr);

//adding to array as the last elemet
arr.push("Sachin");
console.log(arr);


//removing the last element
arr.pop();
console.log(arr);

//adding the element in the beging of an array
arr.unshift("Rahul Dravid");
console.log(arr);

//remvoing the first element
arr.shift();
console.log(arr);

//finding the index
let index = arr.indexOf("Virat");
console.log("The index of the virat is : "+ index);


//number of elements

console.log("Number of the player in the array: "+ arr.length);