function User (first, last) {
    this.firstName = first;
    this.lastName = last;
}

user.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`
}

const heropy = new user('Heropy', 'Park');
const dongdu = new user('Dongdu', 'Lee');

console.log(heropy);
console.log(dongdu);

const heropy = {} // 리터럴 방식