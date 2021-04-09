/* Union Type */
var leemagnon1: string | number | boolean;

function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString(); // Union Type 사용 시 타입 추론 시점이 빨라져서 해당 타입에 관한 api들을 바로 사용할 수 있다.
    }
    if(typeof value === 'string') {
        value.toString(); // 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는) 과정
    }

    throw new TypeError('value must be string or number');
}

logMessage('NCT127');
logMessage(100);

// Union Type으로 인터페이스 두 개를 연결할 때 
interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function askSomeone1(someone: Developer | Person) { 
    // name이라는 union type의 공통 속성만 제공. 
    console.log(someone.name);
    someone.age // 에러
    someone.skill // 에러
    // someone의 값이 Developer일지 Person일지 타입 검증도 없이 타입 추론을 할 수 없기 때문.
    /* 따라서 
       if(typeof someone === 'Developer'){}
       if(typeof someone === 'Person'){}
       이렇게 타입 가드를 해주는 것이 좋다.
    */
}

askSomeone1({name: '개발자', skill: '웹 개발'});
askSomeone1({name: '둉민', age: 25});

/* Intersection Type */
var mark: string | number | boolean;
var winwin: string & number & boolean;

function askSomeone2(someone: Developer & Person) { 
    // name, age, skill 모두 제공
    console.log(someone.name);
    someone.age
    someone.skill
}

askSomeone2({name: '개발자', skill: '웹 개발', age: 25}); 