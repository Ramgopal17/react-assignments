
const textElement = document.getElementById('text');
const changeColorBtn = document.getElementById('changeColorBtn');

function changeTextColor() {
    const colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33C7', '#33FFDD'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
   console.log(randomColor)
    textElement.style.color = randomColor;
}


changeColorBtn.addEventListener('click', changeTextColor);
