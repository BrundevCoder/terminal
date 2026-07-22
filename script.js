const commandsDisplayer = document.getElementById("commandsDisplayer");
const commandInput = document.getElementById("commandInput");

let commands = {
    "info": () => addLine("Made by Bruno in 07/22/26", "string"),
    "ls": () => addLine("README.md index.html styles/ public/ backend/", "string"),
    "help": () => help(),
    "open youtube": () => openLink("https://www.youtube.com/"),
    "open spotify": () => openLink("https://open.spotify.com/"),
    "clear": () => clear(),
    "reset": () => reset(),
    "randomNumber": () => getNumber(),
}

function addLine(command, type) {
    const li = document.createElement("li");
    li.innerText = `${command}`;
    li.classList.add("command");
    
    if (type === "string" || type === "int" || type === "error") {
        li.classList.add(type)
    }
    else {
        li.classList.add("u-command");
    }

    commandsDisplayer.appendChild(li);
}

function help() {
    addLine("List of commands:", "string");
    addLine("`info` : See the info of this terminal", "string");
    addLine("`ls` : See what is in your current directory", "string");
    addLine("`help` : get help with commands", "string");
    addLine("`open youtube` : Open youtube on your broswer!", "string");
    addLine("`open spotify` : Open Spotify on your broswer!", "string");
    addLine("`clear` : It removes every line in your terminal", "string");
    addLine("`reset` : It resets this page", "string");
    addLine("`randomNumber` : Get a random number!", "string");
}

function openLink(link) {
    window.location.href = link;
}

function clear() {
    commandsDisplayer.innerHTML = "";
}

function reset() {
    window.location.reload();
}

function getNumber() {
    const number = Math.floor(Math.random() * 10000000);
    addLine(`${number}`, "int");
}

function readInput() {
    let command = commandInput.value;

    addLine(`$ ${command}`, "u-command")

    if (commands[command]) {
        commands[command]();
    }
    else {
        addLine(`No command named '${command}' found :(`, "error")
    }

    commandInput.value = "";
}

commandInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        readInput();
    }
})