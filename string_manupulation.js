

let str = "My name is Chandan, I am an Blockchain Developer";
console.log(str);

//converting to upercase
let InUpperCase = str.toUpperCase(str);
console.log(InUpperCase);

//converting to lowercase
let InLowerCase = str.toLowerCase(str);
console.log(InLowerCase);

//finding the length
console.log("The length of the string : "+ str.length);


//substring declaration and printing
let sub = str.substring(10,20);
console.log(sub);

let subEnd = str.substring(10);
console.log(subEnd);


//slicing the string
let slice1 = str.slice(21,26);
console.log(slice1);

let slice2 = str.slice(-8,-3);
console.log(slice2);


//to find the index
let toFindTheIndex = str.indexOf("Chandan");
console.log(toFindTheIndex);

//to replace
let replacing = str.replace("Chandan", "Rahul");
console.log(replacing);


// trimming the void space in the begging and the end fo the string
console.log(str);
console.log(str.trim());


//spliting the string
console.log(str.split(","));

//to get the character based on the index
console.log(str.charAt(4));