let setColor = 'black'
let setNum = 16
function grid_size() {
    num = prompt("Type a number 1-100")
    try {
        parseInt(num)
        if (num > 100 || num < 1) {
            throw new Error('BadNum')
        }
    } catch (e) {
        alert('Invalid input!')
        reset()
    }
    if (num <= 100 && num >= 1) {
        grid_items(num)
        setNum = num
    }
}
function reset() {
    grid_items(setNum)
    setColor = 'black'
}
function colors() {
    const colorBox = document.querySelector('.colors');
    let colors = ['red', 'yellow', 'green', 'blue', 'purple', 'orange', 'brown',
        'black', 'rgb']
    for (const color of colors) {
        let box = document.createElement('div')
        box.classList.add(`${color}`)
        box.addEventListener('click', (event) => {
            setColor = color
        })

        colorBox.appendChild(box)
    }
}
function color(color) {
    
}
function grid_items(num) {
    const grid_container = document.querySelector('.grid-container');
    grid_container.innerHTML = ""
    grid_container.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`)

    let gnum = num*num

    for (let n = 0; n < gnum; n++) {
        let grid_item = document.createElement('div')
        grid_item.classList.add('grid')
        grid_item.addEventListener('mouseover', (event) => {
            if (setColor == 'rgb') {
                grid_item.style.setProperty('background-color', `${'#' + Math.floor(Math.random()*16777215).toString(16)}`)
            }
            else {
                grid_item.style.setProperty('background-color', `${setColor}`)
            }
        })
        grid_container.appendChild(grid_item)
    }
}
grid_items(setNum)
colors()