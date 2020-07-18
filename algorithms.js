export {bubbleSort}

function bubbleSort(arr, speed) {
    let speedA = +speed;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
                swap(arr[j], arr[j + 1], speedA, speed);

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            } else {
                bubble(arr[j], arr[j + 1], speedA, speed);
            }
            speedA += +speed;
        }
    }
    return speedA;
}

function swap(elem1, elem2, speedA, speed) {
    setTimeout(function() {
        elem2.after(elem1);
    }, speedA)
    
    setTimeout(function() {
        elem1.classList.add("swappedCell");
        elem2.classList.add("comparedCell");
    }, speedA)

    setTimeout(function() {
        elem1.classList.remove("swappedCell");
        elem2.classList.remove("comparedCell");
    }, speedA + +speed)
    
}

function bubble(elem1, elem2, speedA, speed) {
    setTimeout(function() {
        elem1.classList.add("comparedCell");
        elem2.classList.add("comparedCell");
    }, speedA)

    setTimeout(function() {
        elem1.classList.remove("comparedCell");
        elem2.classList.remove("comparedCell");
    }, speedA + +speed)
}