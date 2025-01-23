const grid = document.getElementById('grid')
const start = document.getElementById('start');
const stop = document.getElementById('stop');

function createTheGrid() {
    const gridType = document.getElementById('grid-select')
    const size = parseInt(gridType.value)
    const numberCells = size * size
    const indexRnd = Math.floor(Math.random() * numberCells)

    grid.innerHTML = ''
    grid.style.gridTemplateColumns = `repeat(${size}, 50px)`

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        grid.appendChild(cell)

        if (i === indexRnd) {
            cell.classList.add('squirell');
        }

        // create the hover to change to yellow
        cell.addEventListener('mouseenter', () => {
            cell.classList.toggle('yellow-cell')
        });
    }
}

start.addEventListener('click', () => {
    start.disabled = true
    stop.disabled = false
    // run the grid creation
    createTheGrid()
});

stop.addEventListener('click', () => {
    start.disabled = false
    stop.disabled = true
    // clear the grid
    grid.innerHTML = ''
});