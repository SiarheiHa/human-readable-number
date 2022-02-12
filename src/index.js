module.exports = function toReadable(number) {
    const numbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const decade = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    let result;
    if (number < 20) {
        result = numbers[number];
    }
    if (number > 19) {
        result = decade[Math.floor(number / 10) - 2];
        if (number % 10 !== 0) {
            result = `${result} ${toReadable(number % 10)}`;
        }
    }
    if (number > 99) {
        result = `${numbers[Math.floor(number / 100)]} hundred`;
        if (number % 100 !== 0) {
            result = `${result} ${toReadable(number % 100)}`;
        }
    }
    return result;
};
