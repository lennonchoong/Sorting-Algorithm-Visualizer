import {createArray, positionArrCenter, shuffleArr, checkIfSorted} from './array.js'

import {bubbleSort} from './bubblesort.js'

import {mergeSort} from './mergesort.js'

import {insertionSort} from './insertionsort.js'

import {selectionSort} from './selectionsort.js'

import {quickSort, timeoutFunctionsQuickSort} from './quicksort.js'

import {cocktailSort} from './cocktailsort.js'

import {heapSort, timeoutFunctionsHeapSort} from './heapsort.js'

import {annotationFunctionObject} from './annotationText.js'

let speed = 40 - +runSpeed.value;

let selectedAlgo = algoSelection.value;

let state = true;

let currentlyRunning;

let functionObject = {
    'bubbleSort': bubbleSort,
    'mergeSort': mergeSort,
    'insertionSort': insertionSort,
    'selectionSort': selectionSort,
    'quickSort': quickSort,
    'cocktailSort': cocktailSort,
    'heapSort': heapSort,
}

arrSize.addEventListener('change', function() {
    let arrSizeVal = arrSize.value;

    state = true; 

    timeoutFunctionsHeapSort.map((x) => clearTimeout(x));
    timeoutFunctionsQuickSort.map((x) => clearTimeout(x));

    clearTimeout(currentlyRunning)

    turnButtonOpaque();
    
    createArray(arrSizeVal);

    shuffleArr();
})

runSpeed.addEventListener('change', function() {
    speed = 40 - +runSpeed.value;
})

algoSelection.addEventListener('change', function() {
    state = true;

    timeoutFunctionsHeapSort.map((x) => clearTimeout(x));
    timeoutFunctionsQuickSort.map((x) => clearTimeout(x));

    clearTimeout(currentlyRunning)

    createArray(arrSize.value);

    turnButtonOpaque();

    shuffleArr();

    selectedAlgo = algoSelection.value;

    insertTextIntoBubble(selectedAlgo);
})

runbtn.addEventListener('click', function() {
    let arr = Array.from(arrContainer.querySelectorAll('.pillar'));

    let sortedArr = Array.from(arr).sort((a, b) => (parseInt(a.style.height) - parseInt(b.style.height)));
    
    if (!state || checkIfSorted(arr, sortedArr)) return;

    state = false;
    
    turnButtonTranslucent();

    let delay = functionObject[selectedAlgo](arr, speed);
    
    currentlyRunning = setTimeout(function() {
        state = true;
        turnButtonOpaque();
        arr.map((x) => x.classList.remove('swappedCell'));
    }, delay);
})

function positionAnnotation() {
    annotationBubble.style.left = algolist.offsetLeft - (parseInt(getComputedStyle(annotationBubble).width) - algolist.offsetWidth) / 2 + 'px';
    triangle.style.left = algolist.offsetLeft - (parseInt(getComputedStyle(triangle)['border-left-width']) - algolist.offsetWidth) / 2 + 'px';
}

function insertTextIntoBubble(selectedAlgo) {
    annotationBubble.innerHTML = '';
    annotationBubble.innerHTML = annotationFunctionObject[selectedAlgo];
}

function turnButtonTranslucent() {
    randomizebtn.style.opacity = 0.5;
    runbtn.style.opacity = 0.5;
}

function turnButtonOpaque() {
    randomizebtn.style.opacity = 1;
    runbtn.style.opacity = 1;
}

randomizebtn.addEventListener('click', function() {
    if (!state) return;

    return shuffleArr()
})

window.addEventListener('resize', function() {
    positionArrCenter(arrContainer);
})

algoSelection.addEventListener('mouseover', function() {
    annotationBubble.style.display = 'block';
    triangle.style.display = 'block';
})

algoSelection.addEventListener('mouseout', function() {
    annotationBubble.style.display = 'none';
    triangle.style.display = 'none';
})

algoSelection.addEventListener('mousedown', function() {
    annotationBubble.style.display = 'none';
    triangle.style.display = 'none';
})

insertTextIntoBubble(selectedAlgo);

positionAnnotation();

createArray(arrSize.value);

shuffleArr();


