// 함수 복습

function sum (x, y) { 
    return x + y
    console.log(x);
}

const a = sum(1, 2); 
const b = sum(12, 43);

console.log(a);
console.log(b);
console.log(a + b);

const sum2 = function (x, y) { 
    return x + y
}

sum2(3, 4);

function sum3 (x, y) { 
    if (x < 2) {
        return;
    }
    return x + y
}

console.log(sum3(1, 3));

function sum4 () { 
    console.log(arguments);
    return arguments[0] + arguments[1];
}

console.log(sum4(12, 12));