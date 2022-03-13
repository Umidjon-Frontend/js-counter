const numberDisplay = document.querySelector(".number"),
    btns = document.querySelectorAll(".btn");
let count = 0;
btns.forEach((item, index) => {
    item.addEventListener("click", () => {
        if (index === 0) {
            count--;
        }
        if (index === 1) {
            count = 0;
        }
        if (index === 2) {
            count++;
        }
        numberDisplay.innerHTML = count;
        if (count > 0) {
            numberDisplay.style.color = "#008000";
        } else if (count < 0) {
            numberDisplay.style.color = "#FF0000";
        } else {
            numberDisplay.style.color = "#222222";
        }
    });
});
