let inputBox = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;

        if (buttonText === '=') {
            try {
                // Evaluate the expression safely
                expression = eval(expression).toString();
            } catch (error) {
                expression = 'Error'; // Handle any evaluation errors
            }
            inputBox.value = expression || '0'; // Reset to '0' if empty
        } else if (buttonText === 'AC') {
            expression = '';
            inputBox.value = '0'; // Reset display to '0'
        } else if (buttonText === 'DEL') {
            expression = expression.slice(0, -1); // Remove last character
            inputBox.value = expression || '0'; // Reset to '0' if empty
        } else if (buttonText === '+/-') { // Change this to match your button text
            if (expression) {
                expression = (-eval(expression)).toString(); // Negate the current value
            }
            inputBox.value = expression || '0'; // Reset to '0' if empty
        } else {
            if (inputBox.value === '0' && !isNaN(buttonText)) {
                expression = buttonText; // Replace '0' with the new input
            } else {
                expression += buttonText; // Concatenate button text to the expression
            }
            inputBox.value = expression; // Update display
        }
    });
});