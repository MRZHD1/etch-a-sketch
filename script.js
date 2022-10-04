function clicked() {
    num = prompt("Type a number 1-100")
    try {
        parseInt(num)
        if (num > 100 || num < 1) {
            throw new Error('HighNum')
        }
    } catch (e) {
        alert('Invalid input!')
    }
    if (num <= 100 && num >= 1) {
        grid_items(num)
    }
}
function grid_items(num) {
    const grid_container = document.querySelector('.grid-container');
    grid_container.innerHTML = ""
    grid_container.style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`)
    gnum = num*num
    for (let n = 0; n < gnum; n++) {
        let grid_item = document.createElement('div')
        grid_item.classList.add('grid')
        grid_container.appendChild(grid_item)
    }
}
grid_items(100)