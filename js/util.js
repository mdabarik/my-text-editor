
function addClassById(id, className) {
    const textField = document.getElementById(id);
    textField.classList.toggle(className);
}

function addClassByIdToInput(id, className) {
    const textField = document.getElementById(id);
    if (textField.classList.contains('text-right')) textField.classList.remove('text-right');
    if (textField.classList.contains('text-center')) textField.classList.remove('text-center');
    if (!textField.classList.contains("text-left"))
        textField.classList.add("text-left");
    else
        textField.classList.remove("text-left");
}