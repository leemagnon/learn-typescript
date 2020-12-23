/* 타입스크립트는 타입을 부여하여 자동 완성을 도와주고 에러를 사전에 방지한다. */
function addNumber(a: number, b: number) {
    return a + b;
}

var result = addNumber(10, 20);

console.log(result.toLocaleString()); // result에 대한 타입이 지정되어있으므로 VSCode가 해당 타입에 대한 API를 미리 보기로 띄워줄 수 있다.

/* JS 특성상 숫자와 문자를 더하면 문자를 리턴한다. */
function addString(a: number, b: string) {
    return a + b;
}

console.log(addString(10, '20')); 