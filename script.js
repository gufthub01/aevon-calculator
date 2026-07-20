const display = document.getElementById("display");

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.textContent;

        if (value === "C") {
            display.value = "";
        } 
        else if (value === "⌫") {
    display.value = display.value.slice(0, -1);
}
else if (value === "%") {
    display.value = Number(display.value) / 100;
}
        else if (value === "=") {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Error";
            }
        } 
        else {
            display.value += value;
        }

    });

});
const themeButton = document.getElementById("theme");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
});
document.addEventListener("keydown", (event) => {

    const key = event.key;

    if (
        "0123456789+-*/.".includes(key)
    ) {
        display.value += key;
    }
    else if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = "Error";
        }
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (key === "Escape") {
        display.value = "";
    }

});