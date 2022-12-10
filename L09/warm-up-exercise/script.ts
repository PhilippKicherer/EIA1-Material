let names: string[] = ["Ben", "Ella", "Emil", "Emilia", "Emma", "Finn", "Hannah", "Lea", "Leon", "Lina", "Louis", "Luca", "Marie", "Matteo", "Mia", "Mila", "Noah", "Paul", "Sophia", "Theo"];

document.querySelector("span").innerHTML = names.length.toString();


document.querySelector("#buttonAufsteigend").addEventListener("click", function () {
    for(let i=0; i<names.length; i++) {
        document.querySelector("#liste").innerHTML+=names[i] + "<br>";
    }
})

document.querySelector("#buttonAbsteigend").addEventListener("click", function() {
    for(let i=19; i>=0; i--) {
        document.querySelector("#liste").innerHTML+=names[i] + "<br>";
    }
})

document.querySelector("#buttonAbsteigend2").addEventListener("click", function() {
    for(let i=19; i>=0; i--) {
        if (names[i] = "Lea", "Paul") {
            console.log("redacted");
        }
        else {
            document.querySelector("#liste").innerHTML+=names[i] + "<br>";
        }}
    });