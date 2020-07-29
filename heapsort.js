export {heapSort}

function heapSort(arr, speed) {
    let speedA = 0;

    let length = arr.length;

    for (let i = Math.floor(length / 2); i >= 0; i--) {
        speedA = heapify(arr, length, i, speed, speedA);
    }

    for (let i = length - 1; i > 0; i--) {

        speedA = arrange(arr, i, 0, speed, speedA);

        [arr[i], arr[0]] = [arr[0], arr[i]];
        speedA = heapify(arr, i, 0, speed, speedA);
    }
}

function heapify(arr, length, i, speed, speedA) {
    let largest = i;
    let leftRoot = 2 * i + 1;
    let rightRoot =  2 * i + 2;

    if (leftRoot < length && parseInt(arr[i].style.height) < parseInt(arr[leftRoot].style.height)) {
        largest = leftRoot;
    }

    if (rightRoot < length && parseInt(arr[largest].style.height) < parseInt(arr[rightRoot].style.height)) {
        largest = rightRoot;
    }

    if (largest != i) {

        speedA = swap(arr, i, largest, speed, speedA);

        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        speedA = heapify(arr, length, largest, speed, speedA)
    }

    return speedA
}

function swap(arr, i, j, speed, speedA) {
    arr = Array.from(arr);

    setTimeout(function() {
        arr[i].classList.add('comparedCell');
        arr[j].classList.add('comparedCell');
    }, speedA)

    speedA += +speed;

    setTimeout(function() {
        if (i - 1 < 0) {
            arr[j].after(arr[i]);
            arrContainer.prepend(arr[j]);
        } else if (j - 1 < 0) {
            arr[i].after(arr[j]);
            arrContainer.prepend(arr[i]);
        } else {
            arr[j].after(arr[i]);
            arr[i - 1].after(arr[j]);
        }
    }, speedA)

    speedA += +speed;

    setTimeout(function() {
        arr[i].classList.remove('comparedCell');
        arr[j].classList.remove('comparedCell');
    }, speedA)

    speedA += +speed;

    return speedA
}

function arrange(arr, i, j, speed, speedA) {
    arr = Array.from(arr);

    setTimeout(function() {
        arr[i].classList.add('swappedCell');
        arr[j].classList.add('swappedCell');
    }, speedA)

    speedA += +speed;

    setTimeout(function() {
        if (i - 1 < 0) {
            arr[j].after(arr[i]);
            arrContainer.prepend(arr[j]);
        } else if (j - 1 < 0) {
            arr[i].after(arr[j]);
            arrContainer.prepend(arr[i]);
        } else {
            arr[j].after(arr[i]);
            arr[i - 1].after(arr[j]);
        }
    }, speedA)

    speedA += +speed;

    setTimeout(function() {
        arr[i].classList.remove('swappedCell');
        arr[j].classList.remove('swappedCell');
    }, speedA)
    
    speedA += +speed;

    return speedA
}