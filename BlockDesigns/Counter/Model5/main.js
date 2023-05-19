let nums = document.querySelectorAll(".stats .count .num");
let interval = 1500;

window.onload = () => {
    nums.forEach((num) => increaseCount(num));
}

function increaseCount(num) {
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