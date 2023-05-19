let nums = document.querySelectorAll(".about .count .num");
let interval = 3000;

window.onload = () => {
    nums.forEach((num) => increaseCounter(num));
}

function increaseCounter(num) {
    let startValue = 0;
    let endValue = parseInt(num.getAttribute("data-value"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue++;
        num.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
}