function togglePaymentDetails(e) {
    // 1. Reference the form using getElementById and store it in a variable.
    const theForm = document.getElementById("checkoutForm");

    // 2. Use getElementById to store a reference to the credit card container and the credit card input
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const creditCardInput = document.getElementById("creditCardNumber");

    // 3. Use getElementById to store a reference to the paypal container and the paypal input
    const paypalContainer = document.getElementById("paypalUsernameContainer");
    const paypalInput = document.getElementById("paypalUsername");

    // 4. Add the class 'hide' to both containers to hide them initially
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");

    // 5. Set the 'required' property of both input fields to false
    creditCardInput.required = false;
    paypalInput.required = false;

    // 6. Use an if/else statement to check the selected payment method
    if (e.target.value === "creditCard") {
        // 6a. If it's creditCard: remove the hide class and set creditCardInput required
        creditCardContainer.classList.remove("hide");
        creditCardInput.required = true;
    } else if (e.target.value === "paypal") {
        // 6b. If it's PayPal: remove the hide class and set paypalInput required
        paypalContainer.classList.remove("hide");
        paypalInput.required = true;
    }
}

function validateForm(event) {
    // 1. Use event.target to reference the form
    const theForm = event.target;

    // 2. Create a variable to track the form validity (set to true initially)
    let isValid = true;

    // 3. Create a variable to store error messages
    const errors = [];

    // 4. Trim the user's full name input and store it in a variable
    const name = theForm.fullName.value.trim();

    // 5. Check if the name is not equal to "Bob" (case-insensitive)
    if (name.toLowerCase() !== "bob") {
        isValid = false;
        errors.push("Only users named Bob can place an order.");
    }

    // 6. Get the selected payment method
    const paymentMethod = theForm.paymentMethod.value;

    // 7. If the payment method is creditCard, check the credit card number
    if (paymentMethod === "creditCard") {
        const ccNumber = theForm.creditCardNumber.value.trim();
        if (ccNumber !== "1234123412341234") {
            isValid = false;
            errors.push("Only one valid test card number is allowed: 1234123412341234.");
        }
    }

    // 8. If not valid, prevent form submission and show errors
    if (!isValid) {
        event.preventDefault();
        showErrors(errors);
        return false;
    }
}

function showErrors(errors) {
    // 1. Reference the error element using document.querySelector
    const errorEl = document.querySelector(".errors");

    // 2. Use map() to wrap each error in a <p> tag
    const html = errors.map((error) => `<p>${error}</p>`);

    // 3. Set the innerHTML of the error element
    errorEl.innerHTML = html.join("");
}

// Add event listener to run togglePaymentDetails when the paymentMethod changes
document.getElementById("paymentMethod").addEventListener("change", togglePaymentDetails);

// Add event listener to run validateForm when the form is submitted
document.getElementById("checkoutForm").addEventListener("submit", validateForm);
