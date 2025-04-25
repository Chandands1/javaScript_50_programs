let city = "Banglore";
let country = "India";
let year = new Date().getFullYear;
let temparature = 28.5;


//Traditional concatination
console.log("My current city is "+city+" , "+ country+ ".");

//Template Literals
console.log(`My current city is ${city} , ${country}.`);

// --- 2. Embedding Expressions ---
// You can embed any valid JavaScript expression inside ${}.
console.log("\n--- 2. Embedding Expressions ---");
let quantity = 5;
let pricePerItem = 150;

let costMessage = `You bought <span class="math-inline">\{quantity\} items at ₹</span>{pricePerItem} each. Total cost: ₹${quantity * pricePerItem}.`;
console.log(costMessage);

let result = ` Total cost: ₹${quantity* pricePerItem}`;
console.log(result);