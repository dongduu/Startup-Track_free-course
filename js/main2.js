// 화살표 함수
// ( ) => { } vs function ( ) { }

// 기존 함수(익명 함수)
const double = function (x) {
    return x * 2;
}
console.log('double: ', double(2));

// 화살표 함수
const doubleArrow = x => ({name: 'dongdu'});
console.log('doublrArrow: ', doubleArrow(2));