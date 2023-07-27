function findMostFrequentElement(arr) {

    const elementCount = {};

    arr.forEach(element => {
        if (elementCount[element]) {
            elementCount[element]++;
        } else {
            elementCount[element] = 1;
        }
    });

    let mostFrequentElement;
    let maxFrequency = 0;

    for (const element in elementCount) {
        if (elementCount[element] > maxFrequency) {
            maxFrequency = elementCount[element];
            mostFrequentElement = element;
        }
    }

    return parseInt(mostFrequentElement);
}

const inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
const result = findMostFrequentElement(inputArray);
console.log(result);