function playSound() {
    document.getElementById("sound").play();
}

function heatblast() {
    document.getElementById("alienName").innerHTML = "🔥 Heatblast";
    document.getElementById("alienImg").src =
        "https://static.wikia.nocookie.net/ben10/images/0/0b/Heatblast.png";
    playSound();
}

function fourarms() {
    document.getElementById("alienName").innerHTML = "💪 Four Arms";
    document.getElementById("alienImg").src =
        "https://static.wikia.nocookie.net/ben10/images/5/5f/Four_Arms.png";
    playSound();
}

function xlr8() {
    document.getElementById("alienName").innerHTML = "⚡ XLR8";
    document.getElementById("alienImg").src =
        "https://static.wikia.nocookie.net/ben10/images/2/2b/XLR8.png";
    playSound();
}

function changeBg() {
    document.body.style.backgroundColor = "darkblue";
}

function toggleDark() {
    document.body.classList.toggle("dark");
}

function hideText() {
    document.getElementById("intro").style.display = "none";
}

function showAlert() {
    alert("It's Hero Time! 🔥");
}

function activateOmnitrix() {
    let omni = document.getElementById("omnitrix");
    omni.classList.add("spin");

    setTimeout(() => {
        omni.classList.remove("spin");
    }, 1000);
}

function choose(alien) {
    document.getElementById("result").innerHTML =
        "You chose: " + alien + " 👽";
}