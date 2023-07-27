function findSecondSmallest(numbersArray) {
    if (numbersArray.length < 2) {
        return null; 
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let i = 0; i < numbersArray.length; i++) {
        const currentNumber = numbersArray[i];

        if (currentNumber < smallest) {
            secondSmallest = smallest;
            smallest = currentNumber;
        } else if (currentNumber < secondSmallest && currentNumber !== smallest) {
            secondSmallest = currentNumber;
        }
    }

    if (secondSmallest === Infinity) {
        return null; 
    }

    return secondSmallest;
}

const numbersArray = [5, 9, 1, 3, 7, 2];
const secondSmallestNumber = findSecondSmallest(numbersArray);
console.log(secondSmallestNumber);