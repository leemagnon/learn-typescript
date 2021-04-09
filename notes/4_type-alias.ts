/* 인터페이스와 타입 별칭 차이 
    확장 가능 / 불가능 여부 - 인터페이스는 extends로 확장이 되지만 타입 별칭은 확장이 되지 않는다.
    가능한한 type보다는 interface를 선언해서 사용하는 것 추천.
*/

// interface Person {
//     name: string;
//     age: number;
// }

type Person1 = {
    name: string;
    age: number;
};

var leemagnon: Person1 = {
    name: '쥐돌이',
    age: 25
}

type MyString = string;
var str: MyString = 'hello';

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo){

}