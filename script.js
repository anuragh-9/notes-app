let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes(){
    const container = document.getElementById("notesContainer");
    container.innerHTML = "";

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "note";

        div.innerHTML = `
            <p>${note}</p>
            <button onclick="deleteNote(${index})">Delete</button>
        `;

        container.appendChild(div);
    });
}

function addNote(){
    const input = document.getElementById("noteInput");
    const text = input.value;

    if(text.trim() === "") return;

    notes.push(text);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    displayNotes();
}

function deleteNote(index){
    notes.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
}

displayNotes();