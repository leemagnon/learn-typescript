// 함수의 파라미터에 타입을 정의하는 방식
function plus(a: number, b: number) {
    return a + b;
}

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
    return 127;
}

// 함수의 타입을 정의하는 방식
function sum1(a: number, b: number): number {
    return a + b;
}

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {

}

log('hello world');
log('hello ts', 'abc');
log('a', 'b', 'c', 'd');
