// 콜백(callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)

function timeout (callback) {
    setTimeout(() => {
        console.log('hi');
        callback();
    }, 3000);
}

timeout(() => {
    console.log('done');
});

