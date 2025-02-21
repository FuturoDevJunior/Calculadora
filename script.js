function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}

function calculate() {
    try {
        let expression = document.getElementById('display').value;
        // Substitui × por * para o cálculo
        expression = expression.replace('×', '*');
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erro';
        setTimeout(clearDisplay, 1000);
    }
}

// Permite uso do teclado
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) appendToDisplay(key);
    if (key === '+') appendToDisplay('+');
    if (key === '-') appendToDisplay('-');
    if (key === '*') appendToDisplay('×');
    if (key === '/') appendToDisplay('/');
    if (key === '.') appendToDisplay('.');
    if (key === 'Enter') calculate();
    if (key === 'Backspace') deleteLast();
    if (key === 'Escape') clearDisplay();
});
