let a = 10;
foo(12);
function foo(a, b) {
    var a = 13;
    a = 11;
    console.log(a);
}