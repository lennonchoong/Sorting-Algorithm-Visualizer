export {cocktailSort}

function cocktailSort(arr, speed) {
    let start = 0;

    let speedA = 0;

    let end = arr.length - 1;

    let swapped = true;

    while (swapped) {

        swapped = false;
        
        for (let i = start; i < end; i++) {
            if (parseInt(arr[i].style.height) > parseInt(arr[i + 1].style.height)) {
                speedA = swapAscending(arr[i], arr[i + 1], speed, speedA);

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            } else {
                speedA = highlightComparison(arr[i], arr[i + 1], speed, speedA);
            }
        }

        if (!swapped) break;

        swapped = false;

        end -= 1;

        for (let j = end - 1; j > start - 1; j--) {
            if (parseInt(arr[j].style.height) > parseInt(arr[j + 1].style.height)) {
                speedA = swapDescending(arr[j], arr[j + 1], speed, speedA);

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            } else {
                speedA = highlightComparison(arr[j], arr[j + 1], speed, speedA);
            }
        }

        start += 1
    }

    return speedA
}

function highlightComparison(i, j, speed, speedA) {
    setTimeout(function() {
        i.classList.add('comparedCell');
        j.classList.add('comparedCell');
    }, speedA);

    speedA += +speed;

    setTimeout(function() {
        i.classList.remove('comparedCell');
        j.classList.remove('comparedCell');
    }, speedA);

    return speedA
}

function swapAscending(i, j, speed, speedA) {
    setTimeout(function() {
        i.classList.add("swappedCell");
        j.classList.add("comparedCell");
        j.after(i);
    }, speedA);

    speedA += +speed;

    setTimeout(function() {
        i.classList.remove("swappedCell");
        j.classList.remove("comparedCell");
    }, speedA);
    
    return speedA
}

function swapDescending(i, j, speed, speedA) {
    setTimeout(function() {
        i.classList.add("comparedCell");
        j.classList.add("swappedCell");
        j.after(i);
    }, speedA);

    speedA += +speed;

    setTimeout(function() {
        i.classList.remove("comparedCell");
        j.classList.remove("swappedCell");
    }, speedA);
    
    return speedA
}