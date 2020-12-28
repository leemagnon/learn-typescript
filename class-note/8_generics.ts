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

function logText(text: string) {
    console.log(text);
    
    return text;
}

function logNumber(num: number) {
    return num;
}

logNumber(10);