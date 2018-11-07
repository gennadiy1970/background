const res = document.querySelector('.res');
const range = document.querySelector('#range');
const resY = document.querySelector('.resY');
const rangeY = document.querySelector('#rangeY');
const elemBG = document.querySelector('.bg');
const elemSize = document.querySelector('.bg-size');
const elemRepeat = document.querySelector('.bg-repeat');
const elemPosition = document.querySelector('.bg-position');
const liSize = document.querySelectorAll('.bg-size .prop');
const liRepeat = document.querySelectorAll('.bg-repeat .prop');
const liPosition = document.querySelectorAll('.bg-position .prop');

elemSize.addEventListener('click', changeSize, false);
elemRepeat.addEventListener('click', changeRepeat, false);
elemPosition.addEventListener('click', changePosition, false);
range.addEventListener('change', changeRange, false);
rangeY.addEventListener('change', changeRangeY, false);

function changeRange (e) {
    e.preventDefault();
    resY.textContent = ''
    res.textContent = range.value.length < 2 ? '0' +  range.value : range.value;
    elemBG.style.backgroundSize = range.value + '%' + ' ' + 'auto';
}
function changeRangeY (e) {
    e.preventDefault();
    res.textContent = '';
    resY.textContent = rangeY.value.length < 2 ? '0' +  rangeY.value : rangeY.value;
    elemBG.style.backgroundSize = 'auto' + ' ' + rangeY.value + '%';
}

function setActive(elem, list) {
    Array.from(list, e => e.classList.remove('active'));
    elem.classList.add('active');
}

function changeSize (e) {
    elemBG.style.backgroundSize = e.target.dataset.size;
    setActive(e.target, liSize)
}

function changeRepeat (e) {
    elemBG.style.backgroundRepeat = e.target.dataset.repeat;
    setActive(e.target, liRepeat)
}

function changePosition (e) {
    elemBG.style.backgroundPosition = e.target.dataset.position;
    setActive(e.target, liPosition)
}