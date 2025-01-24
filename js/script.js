const grid = document.getElementById('grid')
const start = document.getElementById('start');
const stop = document.getElementById('stop');

function createTheGrid() {
    // clear everything
    document.getElementById('well-done').innerHTML = ''
    document.getElementById('yellow-count').innerHTML = '0'
    document.getElementById('white-count').innerHTML = '0'

    const gridType = document.getElementById('grid-select')
    const size = parseInt(gridType.value)
    const numberCells = size * size
    const indexRnd = Math.floor(Math.random() * numberCells)
    const yellowCount = document.getElementById('yellow-count')
    const whiteCount = document.getElementById('white-count')

    let yeBoxes = 0
    let whBoxes = 0

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
        cell.addEventListener('mouseenter', (e) => {
            cell.classList.toggle('yellow-cell')

            let targetClass = e.target.className

            if(targetClass === 'cell') {
                yeBoxes +=  1
                yellowCount.innerHTML = yeBoxes
            } else if(targetClass == 'cell yellow-cell') {
                whBoxes += 1
                whiteCount.innerHTML = whBoxes
            } else if(targetClass == 'cell squirell' || targetClass == 'cell squirell yellow-cell') {
                foundSquirell()
            }
        });
    }
}

function foundSquirell() {
    start.disabled = false
    stop.disabled = true
    // clear the grid
    grid.innerHTML = ''
    document.getElementById('well-done').innerHTML = '<h1 class="text-color-4">Well Done! <br> You have found the squirell</h1>'
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