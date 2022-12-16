//Variablen
let enter: HTMLInputElement = (document.getElementById("inputText") as HTMLInputElement);

//Interface (freiwillig, ansonsten wird nächste Woche hinzugefügt)
interface Task {
    id: number;
    name: string;
    done: Boolean;
}

//Funktionen
//Funktion, um eine Task hinzuzufügen
function addTask() {

    let div: HTMLDivElement = document.createElement("div");
    div.className = "task-item";

    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";

    let label: HTMLLabelElement = document.createElement("label");
    label.innerHTML = enter.value;
    label.className = "taskText";

    let trash: HTMLElement = document.createElement("i");
    trash.className = "far fa-trash-alt";

    document.getElementById("ToDoList").appendChild(div);
    div.appendChild(checkbox);
    div.appendChild(label);
    div.appendChild(trash);

    function deleteTask(div: HTMLElement) {
        div.remove();
    }

    trash.addEventListener("click", function (event: MouseEvent) {
        console.log(event);
        deleteTask(div);
    });
}

//Funktion, um eine Task als "done" zu markieren

//Funktion, um eine Task zu löschen

//(passive) Funktion, um die Anzahl der Tasks wiederzugeben

//Events
//Key-Event, um eine Task hinzuzufügen

enter.addEventListener("keypress", function (event: KeyboardEvent): void {
    if (event.key == "Enter") {
        addTask();
        enter.value = "";
    }
});

//Click-Event, um eine Task als "done" zu markieren (for-Schleife)
//Click-Event, um eine Task zu löschen (for-Schleife)
