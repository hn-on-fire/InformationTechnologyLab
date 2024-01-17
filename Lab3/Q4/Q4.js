const options = document.querySelector('#options');
const selectedColor = document.querySelector('#color');
options.addEventListener('change', () => {
   const chosenColor = options.querySelector('input[type="radio"]:checked').value;
   selectedColor.style.backgroundColor = chosenColor;
   selectedColor.innerHTML = `Currently set to ${chosenColor}`;
});