const noteBtn = document.getElementById("add-btn");
const noteTitle = document.getElementById("note-title");
const noteText = document.getElementById("note-text");
const clear = document.querySelector(".clear");
const noteElm = document.getElementById("notes");

let notesObj = [];

function getNotes() {
    const notes = localStorage.getItem("notes");
    notesObj = notes ? JSON.parse(notes) : [];
}

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notesObj));
}

function showAlert(message) {
    alert(message);
}

function addNote() {
    const title = noteTitle.value.trim();
    const text = noteText.value.trim();

    if (title === "" || text === "") {
        showAlert("Please add note title and details");
        return;
    }

    getNotes();

    const note = { title, text };
    notesObj.push(note);
    saveNotes();

    resetForm();
    showNotes();
}

function deleteNote(index) {
    if (confirm("Delete this note")) {
        getNotes();
        notesObj.splice(index, 1);
        saveNotes();
        showNotes();
    }
}

function editNote(index) {
    if (noteTitle.value !== "" || noteText.value !== "") {
        showAlert("Please clear the form before editing");
        return;
    }

    getNotes();

    noteTitle.value = notesObj[index].title;
    noteText.value = notesObj[index].text;

    notesObj.splice(index, 1);
    saveNotes();
    showNotes();
}

function resetForm() {
    document.querySelector("form").reset();
}

function showNotes() {
    getNotes();
    let html = "";
    notesObj.forEach((note, index) => {
        html += `
      <div class="note">
        <div class="note-cta">
          <p class="note-counter">Note ${index + 1}</p>
          <div class="note-cta-btn">
            <button id="${index}" onclick="deleteNote(${index})" class="note-btn">
              <i class="fas fa-trash"></i> Delete
            </button>
            <button id="${index}" onclick="editNote(${index})" class="note-btn edit-btn">
              <i class="fas fa-edit"></i> Edit
            </button>
          </div>
        </div>
        <hr />
        <h3 class="note-title">Title: ${note.title}</h3>
        <p class="note-text">${note.text}</p>
      </div>
    `;
    });

    noteElm.innerHTML = notesObj.length !== 0 ? html : "No notes added, Please add a note";
}

noteBtn.addEventListener("click", addNote);
clear.addEventListener("click", () => {
    localStorage.clear();
    showNotes();
});

showNotes();
