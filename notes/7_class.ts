/*
// ES5
function Person(name, age) {
    this.name = name;
    this.age = age;
}
var p = new Person('jeongmin', 25);

// ES6
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 클래스 로직
}
var jeongmin = new Person('정민', 25); 

console.log(jeongmin);
*/

// ES6 + TypeScript
class Person {
    // 타입스크립트의 class에서는 사용할 멤버 변수를 모두 정의해주어야 한다.
    private name: string;
    public age: number;
    readonly log: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}