import random from "./getRandom";

// 조건문 (IF statement)

console.log(random());

const a = random();
console.log(a);

if (a === 0) {
    console.log('a is 0');
} else if (a === 2) {
    console.log('a is 2');
} else if (a === 3) {
    console.log('a is 3');
} else {
    console.log('rest...');
}