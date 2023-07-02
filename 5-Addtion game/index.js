    let randInput1 = Math.ceil(Math.random() * 100);
    let randInput2 = Math.ceil(Math.random() * 100);
    let num1 = document.getElementById('firstNumber');
    let num2 = document.getElementById('secondNumber');
    num1.textContent = randInput1;
    num2.textContent = randInput2;
    let result = document.getElementById('gameResult');
    
    function checkButton() {
        let user_input = parseInt(document.getElementById('userInput').value);
        let addResult = parseInt(num1.textContent) + parseInt(num2.textContent);
        if (user_input === addResult) {
            result.textContent = "Congratualtions!, You got it right";
            result.style.backgroundColor = "#028a0f";
        } else {
            result.textContent = "Please Try Again";
            result.style.backgroundColor = "#1e217c";
        }
    
    }
    
    function restartButton() {
        let user_input = document.getElementById('userInput');
        user_input.value = "";
        num1.textContent = Math.ceil(Math.random() * 100);
        num2.textContent = Math.ceil(Math.random() * 100);
        result.textContent = "";
    }
