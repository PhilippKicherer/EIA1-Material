//Interface (freiwillig, ansonsten wird nächste Woche hinzugefügt)
interface Task {
    name: string;
    done: Boolean;
}

//Array Tasks (Hier wird der Array deklariert, wird allerdings noch nicht genutzt.)
let tasklist: string[] = [];
const tasks = document.querySelectorAll("ToDoList");

//Variablen
let input: HTMLInputElement = (document.getElementById("task-input") as HTMLInputElement);


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Variablen
let totaltasks: number = 0;

//Funktionen
//Funktion, um eine Task hinzuzufügen
function addTask() {

    //Variablen in der entstehenden Task (Alle einzelnen Elemente)
    //Der Container Div
    let div: HTMLDivElement = document.createElement("div");
    div.setAttribute("class", "task-item");

    //Die Checkbox, um Tasks als done zu markieren
    let checkbox: HTMLInputElement = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.setAttribute("class", "checkbox");

    //Der Name der Task
    let title: HTMLDivElement = document.createElement("div");
    title.setAttribute("class", "task-name");

    //Der Button, um eine Task zu löschen
    let trash: HTMLElement = document.createElement("i");
    trash.setAttribute("class", "far fa-trash-alt");

    document.getElementById("ToDoList")?.appendChild(div);
    div?.appendChild(checkbox);
    div?.appendChild(title);
    div?.appendChild(trash);
    title.innerHTML = input.value;

    //Event-Listener, der die jeweilige Aufgabe löscht
    trash.addEventListener("click", function (event: MouseEvent) {
        console.log(event);
        deleteTask(div);
        totaltasks --;
        TaskDisplay()
    });
}

//Funktion, um eine Task zu löschen
function deleteTask(div: HTMLElement) {
    div.remove();
}

//(passive) Funktion, um die Anzahl der Tasks wiederzugeben
function TaskDisplay() {
    document.getElementById("total-tasks").innerHTML = totaltasks.toFixed() + " tasks in total"; //tasklist.length + " in total"; (-> später, wenn der Array steht)
}

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//Events
//Key-Event, um eine Task hinzuzufügen
input.addEventListener("keydown", function (event: KeyboardEvent): void {
    if (event.code === "Enter") {
        addTask();
        input.value = "";
        totaltasks ++;
        TaskDisplay()
    }
});

//Click-Event, um eine Task als "done" zu markieren (for-Schleife)
for (let i=0; i<tasks.length; i++) {
    document.querySelector(".checkbox")
}

//Click-Event, um eine Task zu löschen (for-Schleife)

