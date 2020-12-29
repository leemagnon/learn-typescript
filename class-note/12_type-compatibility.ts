/*
    타입 호환

    자바스크립트는 객체 리터럴이나 익명 함수를 사용하기 때문에 
    명시적으로 타입을 지정하는 것보다 코드의 구조 관점에서 타입을 지정하는 것이 더 잘 어울린다.
*/

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

// developer = person; 

person = developer;

/* 함수 */
var add = function(a: number){
    // ...
}

var sum = function(a: number, b: number) {
    // ...
}

sum = add;
add = sum;

/* 제네릭 */
interface Empty<T> {
    // ... 
}
var empty1: Empty<string>;
var empty2: Empty<number>;

empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;

notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;