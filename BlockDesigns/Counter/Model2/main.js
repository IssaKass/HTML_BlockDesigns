let stats = document.querySelector(".stats");
let numbers = document.querySelectorAll(".stats .count .num");

window.onload = function () {
    numbers.forEach((number) => {
        increaseNumber(number);
    });
}

function increaseNumber(number) {
    let goal = number.dataset.goal;
    let nf = Intl.NumberFormat();
    let count = setInterval(() => {
        number.textContent++;
        if (number.textContent == goal) {
            clearInterval(count);
        }
    }, 1 / goal);
}