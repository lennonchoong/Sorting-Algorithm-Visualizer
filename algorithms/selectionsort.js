export {selectionSort}

function selectionSort(arr, speed) {
    let speedA = 0;

    let prevMin = null;

    for (let i = 0; i < arr.length; i++) {
        let min = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (parseInt(arr[min].style.height) > parseInt(arr[j].style.height)) {

                removeHighlightPrevMin(arr[min], speedA);

                min = j;

                highlightMin(arr[min], speedA);
            }
            
            highlightIteration(arr[j], speedA, speed);

            speedA += +speed;
        }
        insertMin(arr[min], prevMin, speedA);

        prevMin = arr[min];        

        let copyOfMin = arr[min];
        arr.splice(min, 1);
        arr.splice(i, 0, copyOfMin);
    }
}

function insertMin(elem, elem2, speedA) {
    setTimeout(function() {
        if (elem2 === null) {
            elem.parentNode.prepend(elem);
        } else {
            elem2.after(elem);
        }
        elem.classList.remove('swappedCell');
    }, speedA)
}

function removeHighlightPrevMin(elem, speedA) {
    setTimeout(function() {
        elem.classList.remove('swappedCell');
    }, speedA)
}

function highlightMin(elem, speedA) {
    setTimeout(function() {
        elem.classList.add('swappedCell');
    }, speedA)
}

function highlightIteration(elem, speedA, speed) {
    setTimeout(function() {
        elem.classList.add('comparedCell');
    }, speedA)

    setTimeout(function() {
        elem.classList.remove('comparedCell');
    }, speedA + +speed) 
}

