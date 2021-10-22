document.addEventListener("DOMContentLoaded", function (event) {
    let notes = JSON.parse(localStorage.getItem("notes"));
    if (notes != null) {
        notes.forEach(note => {
            document.getElementById('actual_notes').innerHTML += `${note}<br>`;
        });
    }
})

let form = document.querySelector('form');
let ul = document.querySelector('ul');
let note = document.getElementById('note');
let notes = [];


function fillNotes() {
    let note_item = document.createElement('li');
    note_item.textContent = note.value;
    ul.appendChild(note_item);
    notes.push(`<li>${note_item.textContent}</li>`);
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    fillNotes();
    note.value = '';
})

function save() {
    localStorage.setItem('notes', JSON.stringify(notes));
    notes = JSON.parse(localStorage.getItem("notes"));
}
function removeAll() {
    localStorage.removeItem("notes");
}