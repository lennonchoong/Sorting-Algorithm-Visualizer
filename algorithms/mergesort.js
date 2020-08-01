export {mergeSort}

let speedA = 0;

function mergeSort(arr, speed) {

    if (arr.length > 1) {
        let middle = Math.round(arr.length / 2);

        let left = arr.slice(0, middle);

        let right = arr.slice(middle);
        
        mergeSort(left, speed);

        mergeSort(right, speed);

        let leftIndex = 0, rightIndex = 0, k = 0;
        
        while (leftIndex < left.length && rightIndex < right.length) {
            if (+parseInt(left[leftIndex].style.height) < +parseInt(right[rightIndex].style.height)) {
                arr[k] = left[leftIndex];
                leftIndex++;
            } else {
                arr[k] = right[rightIndex];
                rightIndex++;
            }
            k++;
        }

        while (leftIndex < left.length) {
            arr[k] = left[leftIndex];
            leftIndex++;
            k++;
        }

        while (rightIndex < right.length) {
            arr[k] = right[rightIndex];
            rightIndex++;
            k++;
        }

        setTimeout(function() {
            arr.map((x) => x.classList.add('comparedCell'));
        }, speedA)

        for (let i = 0; i < arr.length; i++) {

            setTimeout(function() {
                arr[i].parentNode.append(arr[i]);
                arr[i].classList.add('swappedCell');
            }, speedA)

            
            speedA += +speed;
        }

        setTimeout(function() {
            arr.map((x) => x.classList.remove('comparedCell'));
            arr.map((x) => x.classList.remove('swappedCell'));
        }, speedA)

        let returnSpeed = speedA;

        if (arr.length === Array.from(document.querySelectorAll('.pillar')).length) {
            speedA = 0;
        }

        return returnSpeed
    }
}
