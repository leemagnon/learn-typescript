// 타입 추론 기본 1
var a = 10; // 변수 선언 시 vscode 내부적으로 랭귀지 서버가 돌아가서 타입을 추론하기 시작한다.

function getB(b = 10){
    var c = 'hi';
    return b + c;
}

// 타입 추론 기본 2 - 제너릭을 정의했을 때 제너릭의 값을 타입스크립트 내부적으로 추정을 해서 변수의 값의 타입까지 추론을 해준다.
// interface Dropdown<T> {
//     value: T;
//     title: string;
// }

// var shoppingItem: Dropdown<string> = {
//     value: '',
//     title: ''
// };

// 타입 추론 기본 3 - 인터페이스 2개를 이용해서 제너릭을 연결했을 때 
interface Dropdown<T> {
    value: T;
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K> {
    description: string;
    tag: K;
}

var detailedItem: DetailedDropdown<string> = {
    title: 'abc',
    description: 'lalala',
    value: '',
    tag: ''
};

// Best Common Type - 가장 근접한 타입을 추론하는 방식
let arr = [0, 1, true, true, 'a', new Promise(resolve => {})];

