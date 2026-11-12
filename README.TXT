Infrastructure Decision Tool

This Node.js program consists of two tools:
A. Subnet host checker
B. Computer environment selector

This program uses readline-sync to collect user input.

Example 1: Sufficient Subnet
VPC CIDR: /16
Subnet CIDR: /24
Devices required: 200

Usable IP addresses: 251
Subnet is sufficient
Unused IP addresses: 51

Example 2: Insufficient Subnet
VPC CIDR: /16
Subnet CIDR: /28
Devices required: 20

Usable IP addresses: 11
Subnet is insufficient
Unused IP addresses: 9

To run the program:
1. Install Node.js
2. Run npm install in the project folder
3. Run node infrastructure.js