const display = document.getElementById("display");
const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
      key.addEventListener("click", () => {
            if (key.textContent === "Backspace") {
                  display.value = display.value.slice(0, -1);
            } else {
                  display.value += key.textContent;
            }
      });
});
