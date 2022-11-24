//Aufgabe 1
function finger() {
    document.querySelector("#button1").innerHTML = "Der dickste Finger an der Hand ist der Daumen";
};

document.querySelector("#button1").addEventListener('click', finger);


//Aufgabe 2
let count = 0;

function button_click() {
    let new_count = (count + 1);
    count = new_count;
    document.querySelector("#result").innerHTML = count.toString(); 
    // hier nach der Funktion .toString(). count ist als number definiert (siehe Z 10), aber da in der HTML 
    // nur ein String angegeben werden kann muss man bei ts die number in einen String umwandeln.
};

document.querySelector("#button2").addEventListener('click', button_click);
