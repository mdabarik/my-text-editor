
// add event listener on bold
document.getElementById('bold').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    textField.classList.toggle("font-bold");
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
    textField.style.textAlign = 'left';
});
// add event listener on center
document.getElementById('center').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    textField.style.textAlign = 'center';
});
// add even listener on right
document.getElementById('right').addEventListener('click', function() {
    const textField = document.getElementById('text-field');
    textField.style.textAlign = 'right';
});

document.getElementById('font-size').addEventListener('blur', function() {
    let getFontSizeElement = document.getElementById('font-size');
    let getFontSizeValue = parseInt(getFontSizeElement.value);
    getFontSizeElement = 0;
    const textField = document.getElementById('text-field');
    textField.style.fontSize = getFontSizeValue + 'px';
});

document.getElementById('color').addEventListener('blur', function() {
    let colorString = document.getElementById('color').value;
    const textField = document.getElementById('text-field');
    // textField.style.color = colorString;
    textField.setAttribute('style', `color: ${colorString}`);
})