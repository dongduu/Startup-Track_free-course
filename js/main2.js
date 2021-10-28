// 비교 연산자(comparison operator)

const a = 1;
const b = 1;

console.log(a === b);

function isEqual (x, y) {
    return x === y;
}

console.log(isEqual(1, 2));
console.log(isEqual(1, '2'));

const c = 1;
const d = 1;

console.log(c !== d);
console.log(c < d);
console.log(c > d);
console.log(c <= d);
console.log(c >= d);

// 논리 연산자(logical operator)

const e = 1 === 1;
const f = 'ab' === 'ab';
const g = false;

console.log(e);
console.log(f);
console.log(g);

console.log('&&: ', e && f && g);
console.log('||: ', e || f || g);
console.log('!: ', e);
console.log('!: ', !e);