// ES6 classes

// const heropy = {
//     name: 'Heropy',
//     normal () { // function 생략 가능
//         console.log(this.name);
//     },
//     arrow: () => {
//         console.log(this.name);
//     }
// }
// heropy.normal();
// heropy.arrow();

class User {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// function User (first, last) {
//     this.firstName = first;
//     this.lastName = last;
// }
// User.prototype.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`
// }

const heropy = new User('Heropy', 'park');
const amy = new User('Amy', 'Lee');
const neo = new User('Neo', 'Kim');

console.log(heropy);
console.log(amy.getFullName());