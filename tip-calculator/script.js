const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const customInput = document.getElementById("custom");
const buttons = document.querySelectorAll(".btn");
const calc = document.getElementById("calc");
var billValue, peopleValue, customValue, perValue, tip, total;

billInput.addEventListener ("input", () => {
    return billValue = parseFloat(billInput.value);
});

peopleInput.addEventListener ("input", () => {
    return peopleValue = parseFloat(peopleInput.value);
});

customInput.addEventListener ("input", () => {
    return customValue = parseFloat(customInput.value);
});

buttons.forEach((button) => {
    button.addEventListener ("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        return perValue = parseFloat(button.id);
    });
});

const calculate = () => {
    tip = parseFloat(((billValue * perValue) / 100) / peopleValue);
    total = parseFloat((billValue / peopleValue) + tip);
};

const customCalculate = () => {
    tip = parseFloat(((billValue * customValue) / 100) / peopleValue);
    total = parseFloat((billValue / peopleValue) + tip);
};

calc.addEventListener("click", () => {
    if (!customValue) {
        calculate();
        document.getElementById("tip-result").innerText = `$ ${tip}`;
        document.getElementById("total-result").innerText = `$ ${total}`;
    } else {
        customCalculate();
        document.getElementById("tip-result").innerText = `$ ${tip}`;
        document.getElementById("total-result").innerText = `$ ${total}`;
    }
});