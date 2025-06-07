function isCardNumberValid(number) {
    return number === '1234123412341234';
}

function displayError(msg) {
    document.querySelector('.errorMsg').innerText = msg;
}

function submitHandler(event) {
    event.preventDefault();

    const form = event.target;
    const cardNumber = form.cardNumber.value.replace(/\s+/g, '');
    const month = form.expMonth.value;
    const year = form.expYear.value;

    displayError('');
    let errorMsg = '';

    if (isNaN(cardNumber)) {
        errorMsg += 'Card number must be numeric.\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid.\n';
    }

    const currentDate = new Date();
    const enteredDate = new Date(`20${year}`, parseInt(month) - 1);

    if (enteredDate <= currentDate || isNaN(enteredDate)) {
        errorMsg += 'Expiration date must be in the future.';
    }

    if (errorMsg) {
        displayError(errorMsg);
        return false;
    }

    alert("Payment submitted successfully!");
    return true;
}

document.querySelector('#credit-card').addEventListener('submit', submitHandler);
