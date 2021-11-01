// ES6 classes

const heropy = {
    name: 'Heropy',
    normal () { // function 생략 가능
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
}
heropy.normal();
heropy.arrow();
