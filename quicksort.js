export {quickSort}

let speedA = 0;

function partition(arr, low, high, speed) {
    let i = (low - 1);

    let pivot = arr[high];

    setTimeout(function() {
        arr[high].classList.add('pivot');
    }, speedA);
    
    speedA += +speed;

    for (let j = low; j < high; j++) {
        if (parseInt(arr[j].style.height) < parseInt(pivot.style.height)) {
            i++;
        
            swap(arr, i , j, speed);

            [arr[i], arr[j]] = [arr[j], arr[i]];
        } else {
            highlightComparison(arr, i, j, speed);
        }
    }
    
    swapPivot(arr, i , high, speed);
    
    setTimeout(function() {
        arr[high].classList.remove('pivot');
    }, speedA);

    speedA += +speed;

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

    return (i + 1)
}

function quickSort(arr, speed, low = 0, high = arr.length -1) {
    if (low < high) {
        let pi = partition(arr, low, high, speed);

        quickSort(arr, speed, low, pi - 1);
        quickSort(arr, speed, pi + 1, high);
    }

    let returnSpeed = speedA;

    if (arr.slice(low, high + 1).length === Array.from(document.querySelectorAll('.pillar')).length) {
        speedA = 0;
    }

    return returnSpeed
}

function highlightComparison(arr, i, j, speed) {
    arr = Array.from(arr);
    if (i < 0) {
        i = 0;
    }

    if (j < 0) { 
        j = 0;
    }
    setTimeout(function() {        
        arr[j].classList.add('comparedCell');
        arr[i].classList.add('comparedCell');
    }, speedA)

    speedA += +speed;

    setTimeout(function() {
        arr[i].classList.remove('comparedCell');
        arr[j].classList.remove('comparedCell');
    }, speedA)
}

function swap(arr, i, j, speed) {
    arr = Array.from(arr);

    setTimeout(function() {
        let beforeI;

        if (i - 1 < 0) {
            beforeI = 0;
            arr[j].after(arr[i]);
            arrContainer.prepend(arr[j]);
        } else {
            beforeI = i - 1;
            arr[j].after(arr[i]);
            arr[beforeI].after(arr[j]);
        }
        
        arr[j].classList.add('swappedCell');
        arr[i].classList.add('swappedCell');
    }, speedA)
    
    speedA += +speed;
    
    setTimeout(function() {
        arr[j].classList.remove('swappedCell');
        arr[i].classList.remove('swappedCell');
    }, speedA);

    speedA += +speed;

}

function swapPivot(arr, i, high, speed) {
    arr = Array.from(arr);

    setTimeout(function() {
        if (i >= 0) {
            arr[high].after(arr[i + 1]);
            arr[i].after(arr[high]);
        } else {
            arr[high].after(arr[i + 1]);
            arrContainer.prepend(arr[high]);
        }
    }, speedA)
    
    speedA += +speed;
}