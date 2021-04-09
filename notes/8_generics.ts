// Generics : 재사용성이 높은 컴포넌트를 만들 때 자주 활용
// function logText(text) {
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hi');
// logText(true);

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logText<string>('하이');

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }

// logText(10);

// const a = logText('a');
// a.split('') // 반환값의 타입이 string | number 라서 split을 쓸 수가 없음. 타입을 명확히 해야한다.

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str = logText<string>('하이'); // 호출 시 어떤 타입을 사용할 것인지 정의
str.split('');

const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}

const obj1: Dropdown<number> = {value: 10, selected: false};
const obj2: Dropdown<string> = {value: '10', selected: false};

// 제네릭의 타입 제한
function logTextLength1<T>(text: T[]): T[] {
    console.log(text.length); // 배열의 특정 속성에 접근 가능
    text.forEach(function (text) {
        console.log(text);
    })
    return text;
}

logTextLength1<string>(['hi', 'abc']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
    text.length;
    return text;
}

logTextLength2<string>('a'); 
logTextLength2(10); // 에러 발생. number는 length 속성이 없기 때문
logTextLength2({length: 10});

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}

// keyof : ShoppingItem에 있는 키(name, price, stock) 중 한가지가 T가 된다. 
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption('name');