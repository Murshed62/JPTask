function romanToInt(romanNumeral) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };

    let result = 0;

    for (let i = 0; i < romanNumeral.length; i++) {
        const currentNum = romanMap[romanNumeral[i]];
        const nextNum = romanMap[romanNumeral[i + 1]];

        if (nextNum > currentNum) {
            result += nextNum - currentNum;
            i++; 
        } else {
            result += currentNum;
        }
    }

    return result;
}

console.log(romanToInt("IX")); 
console.log(romanToInt("XXI")); 