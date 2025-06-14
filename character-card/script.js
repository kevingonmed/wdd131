
document.addEventListener('DOMContentLoaded', () => {
    const valueDisplay = document.querySelector('.value');
    const increaseBtn = document.getElementById('increase-btn');
    const decreaseBtn = document.getElementById('decrease-btn');

    let currentValue = parseInt(valueDisplay.textContent);

    function updateValue(newVal) {
        if (newVal >= 50 && newVal <= 100) {
            currentValue = newVal;
            valueDisplay.textContent = currentValue;
        }
    }

    increaseBtn.addEventListener('click', () => {
        updateValue(currentValue + 1);
    });

    decreaseBtn.addEventListener('click', () => {
        updateValue(currentValue - 1);
    });
});
