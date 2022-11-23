function finger() {
    console.log("Der dickste Finger an der Hand ist der Daumen")
    document.querySelector("#button1").innerHTML = "Der dickste Finger an der Hand ist der Daumen";
};

document.querySelector("#button1").addEventListener('click', finger);


let count = 0;

function button_click() {
    let new_count = (count + 1);
    count = new_count;
};

function anzeige() {
    document.querySelector("#result").innerHTML = count;
};

document.querySelector("#button2").addEventListener('click', button_click);
document.querySelector("#button2").addEventListener('click', anzeige);