// Obtén referencias a los elementos del DOM
const notaTextarea = document.getElementById('nota');
const guardarBtn = document.getElementById('guardarBtn');
const editarBtn = document.getElementById('editarBtn');
const eliminarBtn = document.getElementById('eliminarBtn');

// Función para guardar la nota
function guardarNota() {
    const nota = notaTextarea.value;
    // Aquí puedes guardar la nota en una base de datos o hacer lo que desees con ella
    console.log('Nota guardada:', nota);
}

// Función para editar la nota
function editarNota() {
    // Habilita la edición del textarea
    notaTextarea.removeAttribute('readonly');
}

// Función para eliminar la nota
function eliminarNota() {
    // Elimina el contenido del textarea
    notaTextarea.value = '';
}

// Asocia las funciones a los eventos de los botones
guardarBtn.addEventListener('click', guardarNota);
editarBtn.addEventListener('click', editarNota);
eliminarBtn.addEventListener('click', eliminarNota);
