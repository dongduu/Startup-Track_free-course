class Vehicle {
    constructor(name, wheel) {
        this.name = name;
        this.wheel = wheel;
    }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

class Bicycle extends Vehicle { // extends: 확장(상속)
    constructor(name, wheel) {
        super(name, wheel) // super: 확장된 클래스, Vehicle, super가 있는 자리에서 Vehicle이 실행
    }
}
const myBicycle = new Bicycle('삼천리', 2);
const duaghterBicycle = new Bicycle('세발', 3);
console.log(myBicycle);
console.log(duaghterBicycle);

class Car extends Vehicle {
    constructor(name, wheel, license) {
        super(name, wheel)
        this.license = license; // 진정한 상속, 기존의 내용 + 추가적인 내용
    }
}
const myCar = new Car('벤츠', 4, true);
const duaghterCar = new Car('포르쉐', 4, false);
console.log(myCar);
console.log(duaghterCar);

// 확장과 상속은 혼용이 됨
// => Car를 만들 때 이미 만들어져 있는 Vehicle 클래스를 가지고 extends와 함께 입력을 하면 Car라는 클래스 내부에서 따로 작성없이 사용 가능 (super = Vehicle)