// Leap Years
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const testYear = 2024;
console.log(`${testYear} is a leap year: ${isLeapYear(testYear)}`);

// Pyramid Building
function buildPyramid(height) {
    const pyramid = [];
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i);
        const blocks = '@'.repeat(2 * i - 1);
        pyramid.push(spaces + blocks + spaces);
    }
    return pyramid;
}

const testHeight = 5;
const pyramidArray = buildPyramid(testHeight);
console.log(pyramidArray);

// Title Case
function toTitleCase(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const testString = "this is a test string";
console.log(`Original string: ${testString}`);
console.log(`Title cased string: ${toTitleCase(testString)}`);

// Even Numbers
function isEven(number) {
    return number % 2 === 0;
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const allEven = numbersArray.every(isEven);
console.log(`The array contains only even numbers: ${allEven}`);

// Long Names
const names = ["John", "Elizabeth", "Christopher", "Alexandra", "Jonathan", "Katherine", "Stephanie"];
const longNames = names.filter(name => name.length > 12);
console.log("Names longer than 12 characters:", longNames);
