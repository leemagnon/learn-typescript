function sum (a: number, b: number): number {
    return a + b;
}

sum(10, 20);

/* 
tsc 를 사용하기 위해 npm i -g typescript로 전역 설치를 한다.

NPM 전역 설치는 프로젝트에서 사용할 라이브러리를 불러올 때 사용하는 것이 아니라,
시스템 레벨에서 사용할 JS 라이브러리를 설치할 때 사용한다. 

NPM 전역 설치 경로는 mac의 경우, /usr/local/lib/node_modules
*/