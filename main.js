  // Write a single JS function using prompt that can sum, divide, multiply and do the modulus.

  const MathsOperation = () => {
    // Defining the prompts
    let fNum = parseFloat(prompt("Enter the first number"));
    let sNum = parseFloat(prompt("Enter the second number"));

    // Writing formulars for the operations
    let sum = fNum + sNum;
    let divide = fNum / sNum;
    let multiply = fNum * sNum;
    let modulus = fNum % sNum;

    // Checking for errors
    if (isNaN(fNum) || isNaN(sNum)) {
        alert("Enter valid numbers");
    } else {
        // Displayig the results
        alert(
            "Sum: " +  sum +
            "\nDivision: " + divide +
            "\nMultiplication: " + multiply +
            "\nModulus: " + modulus
        );
    }
};

MathsOperation();