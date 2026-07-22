const commandsDisplayer = document.getElementById("commandsDisplayer");
const commandInput = document.getElementById("commandInput");

let commands = {
    "info": () => addLine("Made by Bruno in 07/22/26", "string"),
}

function addLine(command, type) {
    const li = document.createElement("li");
    li.innerText = `${command}`;
    li.classList.add("command");
    
    if (type === "string" || type === "int") {
        li.classList.add(type)
    }
    else {
        li.classList.add("u-command");
    }

    commandsDisplayer.appendChild(li);
}

function readInput() {
    let command = commandInput.value;

    addLine(`$ ${command}`, "u-command")

    if (commands[command]) {
        commands[command]();
    }

    commandInput.value = "";
}

commandInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        readInput();
    }
})