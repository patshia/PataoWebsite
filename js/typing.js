const textEl = document.getElementById('text')
const speedEl = document.getElementById('speed')
const text = "PaTshia Lee"
let idx = 1;
let speed = 100 / speedEl.value
speedEl.addEventListener('input', (element) => {
    speed = 300 / element.target.value
})

writeText()

function writeText(){
    textEl.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length){
        idx = 1
    }
    setTimeout(writeText, speed)
}