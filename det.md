# Introduction

## About Me

![My Profile Picture](https://media.licdn.com/dms/image/D5603AQF_X8YJ95GPmw/profile-displayphoto-shrink_800_800/0/1710212488581?e=1715817600&v=beta&t=87duGcNApByy_2WqIvT42oWH8m4v3KamhlvIhn71Y94)

---

# Moeez Khawar

## HIGHLIGHTS OF QUALIFICATIONS

---

## EDUCATION

- **TRENT UNIVERSITY**
  - ON-CAMPUS COMMISSIONER
  - Bachelor Double Major Hons. In Business Administration and Information Systems.
  - Peterborough, ON
  - Sept 2021 – Apr 2024

- **CAMBRIDGE INTERNATIONAL**
  - Bachelor Double Major Hons. In Business Administration and Information Systems.
  - Advanced Level Certificate
  - Sept 2018 – Aug 2020

---

## PROFESSIONAL EXPERIENCE

- **TRENT UNIVERSITY**
  - ON-CAMPUS COMMISSIONER
    - Managed campus-associated tasks such as the Finance Committee, Event Management, Sales, etc.
    - Utilized data visualization tools to create interactive graphical representations of quarterly client sales.

- **SIR STANFORD FLEMING COLLEGE**
  - FALL INTERN
    - Sales and technical associated tasks at the store.
    - Aided problem resolution measures and suggested patches and hardware, software, and network troubleshooting alternatives.

- **TRENT BUSINESS ENACTUS**
  - VICE PRESIDENT OF FINANCE
    - Coordinated and studied financial audits to provide recommendations for procedural improvements.

---

## CERTIFICATION

- Google Cyber Security certificate, 2023
- Python Training, 2021
- Financial Management Project on Air Canada, 2023

---

## LEADERSHIP EXPERIENCE

- **WESTMINSTER INTERNATIONAL COLLEGE**
  - PRESIDENT
    - Actively contributed to college initiatives as head of the college council, promoting civic engagement and youth-driven change. Managed events with crowds of more than 5000.

- **IRC AT TRENT**
    - Joined as Vice-president of Events, Later promoted to president of the club.
    - Spearheaded the IRC a Non-profit organization, overseeing all strategic and operational aspects of the organization. Raised funds of over $7000 through various events.

- **TIM HORTONS**
  - SUPERVISOR
  - Sept 2022 – Feb 2023

---

Design inspiration from [Dribbble](https://dribbble.com/shots/1141520-PSD-CV-template?list=searches&offset=17)

---

# JavaScript Code

```javascript
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
