import {createArray, positionArrCenter, shuffleArr, checkIfSorted} from './array.js'

import {bubbleSort} from './algorithms.js'

let speed = 25 - +runSpeed.value;

let selectedAlgo = algoSelection.value;

let state = true;

let functionObject = {
    'bubbleSort': bubbleSort,
}

arrSize.addEventListener('change', function() {
    let arrSizeVal = arrSize.value;

    createArray(arrSizeVal);

    shuffleArr();
})

runSpeed.addEventListener('change', function() {
    speed = 25 - +runSpeed.value;
})

algoSelection.addEventListener('change', function() {
    selectedAlgo = algoSelection.value;
})

runbtn.addEventListener('click', function() {
    let arr = Array.from(arrContainer.querySelectorAll('.pillar'));

    let sortedArr = Array.from(arr).sort((a, b) => (parseInt(a.style.height) - parseInt(b.style.height)));
    
    if (!state || checkIfSorted(arr, sortedArr)) return;

    state = false;

    let delay = functionObject[selectedAlgo](arr, speed);

    setTimeout(function() {
        state = true;
    }, delay);
})

randomizebtn.addEventListener('click', function() {
    if (!state) return;

    return shuffleArr()
})

window.addEventListener('resize', function() {
    positionArrCenter(arrContainer);
})

createArray(arrSize.value);

shuffleArr();


