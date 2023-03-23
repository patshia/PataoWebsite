const container = document.getElementById('container')
const colors = ['#bbee9d', '#57a87e', '#2f7633', '#285438', '#2d6c48']
const SQUARES = 1900

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
    const color = colors[Math.floor(Math.random() * 5)]
    element.style.background = color
}

function removeColor(element) {
    element.style.background = '#1f1f1f'
}