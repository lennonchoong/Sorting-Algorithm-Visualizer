import {createArray, positionArrCenter, shuffleArr, checkIfSorted} from './array.js'

import {bubbleSort} from './bubblesort.js'

import {mergeSort} from './mergesort.js'

import {insertionSort} from './insertionsort.js'

import {selectionSort} from './selectionsort.js'

import {quickSort} from './quicksort.js'

import {cocktailSort} from './cocktailsort.js'

import {heapSort} from './heapsort.js'

let speed = 40 - +runSpeed.value;

let selectedAlgo = algoSelection.value;

let state = true;

let functionObject = {
    'bubbleSort': bubbleSort,
    'mergeSort': mergeSort,
    'insertionSort': insertionSort,
    'selectionSort': selectionSort,
    'quickSort': quickSort,
    'cocktailSort': cocktailSort,
    'heapsort': heapSort,
}

arrSize.addEventListener('change', function() {
    let arrSizeVal = arrSize.value;

    state = true; 
    
    createArray(arrSizeVal);

    shuffleArr();
})

runSpeed.addEventListener('change', function() {
    speed = 40 - +runSpeed.value;
})

algoSelection.addEventListener('change', function() {
    state = true;

    createArray(arrSize.value);

    shuffleArr();

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
        arr.map((x) => x.classList.remove('swappedCell'));
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


