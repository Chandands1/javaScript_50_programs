const laptop={
    brand:"macbook",
    model:"air m2",
    screenSize:13,
    isTouchScren:false,
    spec:{
        processor:"m2 chip",
        ramGB:8,
        storageGB:256
    },
    ports:["USB-C", "USB-A", "HDMI"],
    displayInfo: function(){
        console.log(`This is the lap ${this.brand} ${this.model} (${this.screenSize} Inches)`);
    },
    displayStorage(){
        console.log(`Storage: ${this.spec.storageGB}GB`);
    },
    "operating system":"mac os"

};
console.log("Created laptop object:");
console.log(laptop);

//accessing the objects
console.log("Brand (dot): ", laptop.brand);
console.log("RAM: "+laptop.spec.ramGB);

//bracket notation
let propertyToGet="isTouchScren";
console.log(`Is Touchscreen (via variable '${propertyToGet}'):`, laptop[propertyToGet]); // Output: false

propertyToGet = "ports";
console.log(`Ports (via variable '${propertyToGet}'):`, laptop[propertyToGet]); // Output: [ 'USB-C', 'USB-A', 'HDMI' ]

//adding the new properties
console.log("Color before adding: ",laptop.color);
laptop.color="Silver";
laptop["purchaseYear"] = new Date().getFullYear();
console.log("Color after adding: ", laptop.color);
console.log("Purchase year:", laptop.purchaseYear);

console.log("\n--- 4. Modifying Existing Properties ---");
console.log("RAM before upgrade:", laptop.spec.ramGB); // Output: 16
laptop.spec.ramGB = 32; // Modify nested property using dot notation
laptop['isTouchScren'] = true; // Modify using bracket notation
console.log("RAM after upgrade:", laptop.spec.ramGB);   // Output: 32
console.log("Is Touchscreen now:", laptop.isTouchScren); // Output: true


//deleting properties

console.log("Deleting properties");
console.log("before: " , laptop.purchaseYear);
delete laptop.purchaseYear;
console.log("after: " , laptop.purchaseYear);


//calling ghe methods

console.log("calling the methods: ");
laptop.displayInfo();
laptop.displayStorage();