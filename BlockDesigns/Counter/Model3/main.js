let nums = document.querySelectorAll(".stats .count .num");
let interval = 3000;

nums.forEach((num) => {
    let startValue = 0;
    let endValue = parseInt(num.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(() => {
        startValue++;
        num.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})