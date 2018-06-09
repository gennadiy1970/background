const elemBG = document.querySelector('.bg');
const elemSize = document.querySelector('.bg-size');
const elemRepeat = document.querySelector('.bg-repeat');
const elemPosition = document.querySelector('.bg-position');

elemSize.addEventListener('click', changeSize, false);
elemRepeat.addEventListener('click', changeRepeat, false);
elemPosition.addEventListener('click', changePosition, false);

function changeSize (e) {
    elemBG.style.backgroundSize = e.target.dataset.size;
}

function changeRepeat (e) {
    elemBG.style.backgroundRepeat = e.target.dataset.repeat;
}

function changePosition (e) {
    elemBG.style.backgroundPosition = e.target.dataset.position;
}