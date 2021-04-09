interface Celebrity {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

function introduce(): Celebrity | Person {
    return {name: 'Mark', age: 22, skill: 'dance'}
}

var mark = introduce();

console.log(mark.skill); // Celebrity | Person 유니온 타입이므로 name 속성만 있음.

/* 타입 단언 사용 - 가독성이 안 좋음. */
if((mark as Celebrity).skill){ 
    const skill = (mark as Celebrity).skill;
    console.log(skill);
}else if((mark as Person).age){
    const age = (mark as Person).age;
    console.log(age);
}

/* 타입 가드 정의 */
function isCelebrity(target: Celebrity | Person): target is Celebrity {
    return (target as Celebrity).skill !== undefined;
}

if(isCelebrity(mark)){
    console.log(mark.skill);
}else{
    console.log(mark.age);
}