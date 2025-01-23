const grid = document.getElementById('grid')
const start = document.getElementById('start');
const stop = document.getElementById('stop');

function createTheGrid() {
    grid.innerHTML = ''
    grid.style.gridTemplateColumns = `repeat(${5}, 50px)`
    for (let i = 0; i < 5 * 5; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell')
        grid.appendChild(cell)

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