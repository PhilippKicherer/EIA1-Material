//Variablen
let enter = document.getElementById("inputText");
//Funktionen
//Funktion, um eine Task hinzuzufügen
function addTask() {
    let div = document.createElement("div");
    div.className = "task-item";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    let label = document.createElement("label");
    label.innerHTML = enter.value;
    label.className = "taskText";
    let trash = document.createElement("i");
    trash.className = "far fa-trash-alt";
    document.getElementById("ToDoList").appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(trash);
    function deleteTask(div) {
        div.remove();
    }
    trash.addEventListener("click", function (event) {
        console.log(event);
        deleteTask(div);
    });
}
//Funktion, um eine Task als "done" zu markieren
//Funktion, um eine Task zu löschen
//(passive) Funktion, um die Anzahl der Tasks wiederzugeben
//Events
//Key-Event, um eine Task hinzuzufügen
enter.addEventListener("keypress", function (event) {
    if (event.key == "Enter") {
        addTask();
        enter.value = "";
    }
});
//Click-Event, um eine Task als "done" zu markieren (for-Schleife)
//Click-Event, um eine Task zu löschen (for-Schleife)
//# sourceMappingURL=script.js.map