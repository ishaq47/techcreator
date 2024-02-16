// javascripts page 
const nc = document.querySelector(".container-notes");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function showNotes() {
    nc.innerHTML = localStorage.getItem("notes");
}

showNotes();

function updateStorage() {
    localStorage.setItem("notes", nc.innerHTML);
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "./delete-removebg-preview.png";
    nc.appendChild(inputBox).appendChild(img);
});

nc.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box"); // Fix the class name here
        notes.forEach((note) => {
            note.oninput = function () { // Change from "onkeyup" to "oninput"
                updateStorage();
            };
        });
    }
});
