const readline = require("readline-sync");

let continueProgram = "yes";
while (continueProgram === "yes") {

console.log("Program Structure");
console.log("A. Subnet Host Checker");
console.log("B. Compute Environment Selector");

let choice = readline.question("Select option (A or B): ");

if (choice.toUpperCase() === "A") { 
console.log("You have selected Subnet Host Checker.");

let vpcCIDR = readline.questionInt("Enter VPC CIDR (16-30): ");
let subnetCIDR =readline.questionInt("Enter Subnet CIDR (16-30): ");
let devices = readline.questionInt("Enter number of devices: ");

if (vpcCIDR < 16 || vpcCIDR > 30 || subnetCIDR < 16 || subnetCIDR > 30) {
console.log("Invalid CIDR. CIDR must be inbetween 16 and 30.");

} else if (devices <=0) {
console.log("Invalid number of devices. Must be positive.");

} else if (subnetCIDR < vpcCIDR) {
console.log("Subnet CIDR is inconsistent with VPC CIDR.");

} else {
console.log("Subnet CIDR is consistent with VPC CIDR.");

let totalIPs = 2 ** (32 - subnetCIDR);
let usableIPs = totalIPs - 5;
console.log("Usable IP addresses: " + usableIPs);

if (usableIPs >= devices) {
console.log("Subnet is sufficient.");
console.log("Unused IP addresses: " + (usableIPs - devices));

} else {
console.log("Subnet is insufficient.");
console.log("Additional IP addresses needed: " + (devices - usableIPs));
}
}

} else if (choice.toUpperCase() === "B") {
console.log("You have selected Compute Environment Selector.");

let appName = readline.question("Enter application name: ");
let monthlyUsers = readline.questionInt("Enter expected monthly users: ");
let budget = readline.questionInt("Enter monthly budget: ");
let highAvailability = readline.question("Is high availability required? (yes/no): ");

if (appName.trim() === "" || monthlyUsers < 0 || budget < 0 ||
(highAvailability.toLowerCase() !== "yes" &&
highAvailability.toLowerCase() !== "no")) {
console.log ("Invalid input. Please enter valid application information.");

} else {

if (monthlyUsers > 10000 || highAvailability.toLowerCase() === "yes") {
console.log("Recommended architecture: EC2 + Load Balancer + Auto Scaling");

} else if (monthlyUsers >= 1000 && monthlyUsers <=10000) {
console.log("Recommended architecture: EC2 + Load Balancer");

} else {
console.log("Recommended architecture: Single EC2");
}

if (budget < 1000 && (monthlyUsers >= 1000 || highAvailability.toLowerCase() === "yes")) {
console.log("Warning: Your budget is too low for recommended architecture.");

} else if (budget >= 1000 && budget <= 3000 &&
(monthlyUsers > 10000 || highAvailability.toLowerCase() === "yes")) {
console.log("Warning: Auto Scaling exceeds your budget.");
}
}

} else { 
console.log("Invalid selection.");
}
continueProgram = readline.question("Would you like to run another structure? (yes/no): ").toLowerCase();
}
console.log("Program ended.");

