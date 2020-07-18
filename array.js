export {createArray, positionArrCenter, resizePillars, shuffleArr, checkIfSorted};

function createArray(arrSizeVal) {
    if (arrContainer.children.length !== 0) {
        Array.from(arrContainer.children).map((cell) => (cell.remove()));
    }

    for (let i = 0; i < arrSizeVal; i ++) {
        let pillar = document.createElement('div');

        arrContainer.append(pillar);

        pillar.classList.add('pillar');
    }

    resizePillars(arrSizeVal, arrContainer);
}

function resizePillars(arrSizeVal, arrContainer) {
    let pillars = document.querySelectorAll('.pillar');

    let pillarHeight = 50;

    let computedStyle = getComputedStyle(arrContainer);

    for (let pillar of pillars) {
        pillar.style.height = pillarHeight + "px";

        pillar.style.width = (parseInt(computedStyle.width) - arrSizeVal)/arrSizeVal + "px";

        pillarHeight += (parseInt(computedStyle.height) - 50)/arrSizeVal;
    }
}

function positionArrCenter(arrContainer) {
    arrContainer.style.left = +document.documentElement.clientWidth/2 - +arrContainer.offsetWidth/2 + 'px';
}

function shuffleArr() {
    let arr = Array.from(arrContainer.querySelectorAll('.pillar'));
    
    let newArr = document.createElement('div');

    fisherYatesShuffle(arr).map((elem) => newArr.append(elem));

    newArr.id = "arrContainer";

    arrContainer.replaceWith(newArr);

    positionArrCenter(arrContainer);
}

function fisherYatesShuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let randInt = Math.floor(Math.random() * (i));
        
        [arr[randInt], arr[i]] = [arr[i], arr[randInt]];
    }
    return arr
}

function checkIfSorted(arr, sortedArr) {
    for (let i = 0; i < arr.length; i ++) {
        if (arr[i].style.height !== sortedArr[i].style.height) {
            return false;
        }
    }
    return true;
}