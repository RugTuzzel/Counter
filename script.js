const DecreaseBtn = document.getElementById("DecreaseBtn");
const ResetBtn = document.getElementById("ResetBtn");
const IncreaseBtn = document.getElementById("IncreaseBtn");

const CounterLabel = document.getElementById("CounterLabel");

let count = 0;
IncreaseBtn.onclick = function(){
    count++;
    CounterLabel.textContent = count;
}

DecreaseBtn.onclick = function(){
    count--;
    CounterLabel.textContent = count;
}

ResetBtn.onclick = function(){
    count = 0;
    CounterLabel.textContent = count;
}