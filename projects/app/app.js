//Selector
const billInput = document.querySelector(".bill-input");
const tipInput = document.querySelector('.tip-input');
const calcButton = document.getElementById('calc-button');
const result = document.getElementById('result');

//Listener
calcButton.addEventListener('click', calculateBill);

//Functions
function calculateBill(){
    event.preventDefault();
    result.innerHTML = "";
    var bill = parseFloat(billInput.value);
    var tip = parseFloat(tipInput.value);

    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');

    tipAmount = document.createElement('p');
    tipAmount.innerText = 'Tip amount: ' + tip*bill/100;
    tipAmount.classList.add('tip-amount');

    billAmount = document.createElement('p');
    billAmount.innerText = 'Bill amount: ' + parseFloat(tip*bill/100 + bill);
    billAmount.classList.add('tip-amount');

    resultDiv.appendChild(tipAmount);
    resultDiv.appendChild(billAmount);

    result.appendChild(resultDiv);
}