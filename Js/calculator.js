let buttons = document.getElementsByTagName("button")
let display = document.getElementById("display")


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let input = this.innerText;
        displayUpdate(input)
    }
}

function displayUpdate(input) {
    let currentDisplay = display.innerText
    if (currentDisplay == "") {
        if (input != "AC" && input != "DEL" && input != "=") {
            display.innerText = " "
            display.innerText += input
        }
    }
    else {
        if (input == "DEL") {
            display.innerText = currentDisplay.substring(0, currentDisplay.length - 1)
        }
        if (input == "AC") {
            display.innerText = " "
        }
        if (input != "AC" && input != "DEL" && input != "=") {
            display.innerText += input
        }
        if (input == "=") {
            let Result = display.innerText
            display.innerText = eval(Result)
        }
    }
}  
