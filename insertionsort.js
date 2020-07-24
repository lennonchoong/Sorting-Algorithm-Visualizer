export {insertionSort}

function insertionSort(arr, speed) {
    let speedA = 0;
    for (let i = 1; i < arr.length; i++) {
        let j = i - 1;

        let key = arr[i];

        while (j >= 0 && parseInt(key.style.height) < parseInt(arr[j].style.height)) {
            highlight(arr[j], key, speedA, speed)

            arr[j + 1] = arr[j];
                
            j = j - 1;

            speedA += +speed;
        }

        removeHighlight(speedA)

        arr[j + 1] = key
    }
    return speedA
}

function highlight(elem, elem2, speedA, speed) {
    setTimeout(function() {
        elem.classList.add('comparedCell');
        elem2.classList.add('swappedCell');
        elem.before(elem2);
    }, speedA)

    setTimeout(function() {
        elem2.classList.remove('swappedCell');
    }, speedA + +speed) 
}

function removeHighlight(speedA) {
    setTimeout(function() {
        Array.from(document.querySelectorAll('.comparedCell')).map((x) => x.classList.remove('comparedCell'));
    }, speedA)
}