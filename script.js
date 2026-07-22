const commandsDisplayer = document.getElementById("commandsDisplayer");
const commandInput = document.getElementById("commandInput");

let commands = {
    "info": () => addLine("Made by Bruno in 07/22/26", "string"),
    "ls": () => addLine("README.md index.html styles/ public/ backend/", "string"),
    "help": () => help(),
    "open youtube": () => openLink("https://www.youtube.com/"),
    "open spotify": () => openLink("https://open.spotify.com/"),
    "open temp-converter": () => openLink("https://brundevcoder.github.io/temperature-converter/"),
    "open guess-the-word": () => openLink("https://brundevcoder.github.io/guess-the-word/"),
    "open cat-gallery": () => openLink("https://brundevcoder.github.io/cat-gallery/"),
    "open guess-the-number": () => openLink("https://brundevcoder.github.io/guess-the-number-web/"),
    "clear": () => clear(),
    "reset": () => reset(),
    "randomNumber": () => getNumber(),
    "randomLetter": () => getLetter(),
    "deleteCommands": () => deleteCommands(),
    "blur": () => blurControll(true),
    "unblur": () => blurControll(false),
    "getDate": () => date(),
    "bg-normal": () => changeBg("#20201f"),
    "bg-blue": () => changeBg("#1e4257"),
    "bg-red": () => changeBg("#530707"),
    "bg-pink": () => changeBg("#520761"),
    "bg-green": () => changeBg("#05460a"),
    "bg-yellow": () => changeBg("#4e4906"),
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
    addLine("\n`info` : See the info of this terminal", "string");
    addLine("`ls` : See what is in your current directory", "string");
    addLine("`help` : get help with commands", "string");
    addLine("`open youtube` : Open youtube on your broswer!", "string");
    addLine("`open spotify` : Open Spotify on your broswer!", "string");
    addLine("`open temp-converter` : Open my temperature converter on your broswer!", "string");
    addLine("`open guess-the-word` : Open my guess the word on your broswer!", "string");
    addLine("`open guess-the-number` : Open my guess the number on your broswer!", "string");
    addLine("`open cat-gallery` : Open my cat-gallery on your broswer!", "string");
    addLine("`clear` : It removes every line in your terminal", "string");
    addLine("`reset` : It resets this page", "string");
    addLine("`randomNumber` : Get a random number!", "string");
    addLine("`randomLetter` : Get a random letter!", "string");
    addLine("`deleteCommands` : Delete all commands of this terminal", "string");
    addLine("`blur` : To blur the terminal", "string");
    addLine("`unblur` : To unblur the terminal", "string");
    addLine("`getDate` : To see todays date/time", "string");
    addLine("`bg-normal` : Change your background to Normal", "string");
    addLine("`bg-blue` : Change your background to Blue", "string");
    addLine("`bg-red` : Change your background to Red", "string");
    addLine("`bg-pink` : Change your background to Pink", "string");
    addLine("`bg-green` : Change your background to Pink", "string");
    addLine("`bg-yellow` : Change your background to Yellow", "string");
}

function openLink(link) {
    addLine(`Re-directing to ${link} ...`, "string")

    setTimeout(() => {
        window.location.href = link;
    }, 2500);
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

function getLetter() {
    const letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
        "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v",
        "b", "n", "m"
    ]

    addLine(`${letters[Math.floor(Math.random() * letters.length)]}`, "string");
}

function deleteCommands() {
    commands = {};
}

function blurControll(boolean) {
    if (boolean) {
        document.body.style.filter = "blur(3px)";
    }
    else {
        document.body.style.filter = "blur(0)";
    }
}

function date() {
    const today = new Date();

    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();

    addLine(`Date returned: { \n \n "Date": ${month}/${day}/${year} \n \n "Time": ${hours}h : ${minutes}m : ${seconds}s \n \n }`, "string");
}

function changeBg(color) {
    document.body.style.background = color;
    addLine(`Style applied successively! Bg: ${color}`)
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

commandInput.focus();