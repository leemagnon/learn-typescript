function Person(name, age) {
    this.name = name;
    this.age = age;
}
var p = new Person('jeongmin', 25);

class Person {
    constructor(name, age) {
        console.log("생성 되었습니다.");
        this.name = name;
        this.age = age;
    }
    // 클래스 로직
}
var jeongmin = new Person('정민', 25); 

console.log(jeongmin);