# Calculadora Moderna

Uma calculadora elegante e funcional hospedada diretamente no GitHub Pages.

## Demo

Abaixo está a calculadora funcionando (crie um arquivo `index.html` com este código):

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora Moderna</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background: linear-gradient(45deg, #1a1a2e, #16213e);
        }

        .calculator {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        #display {
            width: 100%;
            height: 80px;
            background: rgba(255, 255, 255, 0.1);
            border: none;
            border-radius: 10px;
            padding: 20px;
            font-size: 28px;
            color: #fff;
            text-align: right;
            margin-bottom: 20px;
            outline: none;
        }

        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
        }

        button {
            padding: 20px;
            font-size: 20px;
            border: none;
            border-radius: 10px;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        button:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        button:active {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(0);
        }

        .operator {
            color: #00d4ff;
        }

        .equals {
            background: #00d4ff;
            color: #1a1a2e;
        }

        .equals:hover {
            background: #00b8ff;
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" id="display" readonly>
        <div class="buttons">
            <button onclick="clearDisplay()">C</button>
            <button onclick="appendToDisplay('(')">(</button>
            <button onclick="appendToDisplay(')')">)</button>
            <button class="operator" onclick="appendToDisplay('/')">/</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('*')">×</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="deleteLast()">⌫</button>
            <button class="equals" onclick="calculate()">=</button>
        </div>
    </div>

    <script>
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
                expression = expression.replace('×', '*');
                let result = eval(expression);
                document.getElementById('display').value = result;
            } catch (error) {
                document.getElementById('display').value = 'Erro';
                setTimeout(clearDisplay, 1000);
            }
        }

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
    </script>
</body>
</html>
