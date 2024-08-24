// Write a single JS function using prompt that can sum, divide, multiply and do the modulus. Then catch all the errors.

function performOperation() {
    try {
        // Taking user input
        let num1 = parseFloat(prompt("Enter the first number:"));
        let num2 = parseFloat(prompt("Enter the second number:"));

        // Check if input is valid numbers
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Invalid input. Please enter valid numbers.");
        }

        // Performing operations
        let sum = num1 + num2;
        let division = num1 / num2;
        let multiplication = num1 * num2;
        let modulus = num1 % num2;

        // Displaying results
        alert("Sum: " + sum + "\nDivision: " + division + "\nMultiplication: " + multiplication + "\nModulus: " + modulus);
    } 
    catch (error) {

        // Handle errors
        alert("Error: " + error.message);
    }
}

// Calling the function
performOperation();