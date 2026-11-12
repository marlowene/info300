const readline = require("readline-sync");

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

} else { 
console.log("Invalid selection.");
}


