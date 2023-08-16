
// add event listener on bold
document.getElementById('bold').addEventListener('click', function() {
    addClassById('text-field', 'font-extrabold');
});
// add event listener on italic
document.getElementById('italic').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    textField.classList.toggle("italic");
});
// add event listener on underline
document.getElementById('underline').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    textField.classList.toggle("underline");
});

// add event listener on left
document.getElementById('left').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    if (textField.classList.contains('text-right')) textField.classList.remove('text-right');
    if (textField.classList.contains('text-center')) textField.classList.remove('text-center');
    if (!textField.classList.contains("text-left"))
        textField.classList.add("text-left");
    else
        textField.classList.remove("text-left");
});
// add event listener on center
document.getElementById('center').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    if (textField.classList.contains('text-left')) textField.classList.remove('text-left');
    if (textField.classList.contains('text-right')) textField.classList.remove('text-right');
    if (!textField.classList.contains("text-center"))
        textField.classList.add("text-center");
    else
        textField.classList.remove("text-center");
});
// add even listener on right
document.getElementById('right').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    if (textField.classList.contains('text-left')) textField.classList.remove('text-left');
    if (textField.classList.contains('text-center')) textField.classList.remove('text-center');
    if (!textField.classList.contains("text-right"))
        textField.classList.add("text-right");
    else
        textField.classList.remove("text-right");
});

document.getElementById('font-size').addEventListener('blur', function() {
    let getFontSizeElement = document.getElementById('font-size');
    let getFontSizeValue = parseInt(getFontSizeElement.value);
    getFontSizeElement = 0;
    console.log(getFontSizeValue);
    const textField = document.getElementById('text-field');
    textField.classList.add(`text-[${getFontSizeValue}px]`);
});

document.getElementById('color').addEventListener('blur', function() {
    let colorString = document.getElementById('color').value;
    const textField = document.getElementById('text-field');
    for (let i = textField.classList.length - 1; i >= 0; i--) {
        const className = textField.classList[i];
        if (className.startsWith('text-')) {
          textField.classList.remove(className);
        }
      }
    textField.classList.add(`text-[${colorString}]`);
})