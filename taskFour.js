function findTwoNumbersWithSum(array, target) {
    const numIndexMap = {};

    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        const complement = target - currentNum;

        if (complement in numIndexMap) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[currentNum] = i;
    }

    return null;
}

const inputArray = [1, 3, 6, 8, 11, 15];
const target = 9;
const result = findTwoNumbersWithSum(inputArray, target);
console.log(result); 