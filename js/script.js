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
    document.getElementById('well-done').innerHTML = '<div class="well-done-wrapper"><h1 class="text-color-4">Well Done! <br> You have found the squirell</h1></div>'
    celebrate()
}

function celebrate() {
    // confetti();
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
        return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
        confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
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
    document.getElementById('yellow-count').innerHTML = '0'
    document.getElementById('white-count').innerHTML = '0'
});