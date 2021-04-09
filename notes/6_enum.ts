// 숫자형 enum
enum Shoes {
    Nike = 10, 
    Adidas, // 11
    NewBalance // 12
}

var myShoes = Shoes.Nike;

console.log(myShoes);

// 문자형 enum
enum Nct127 {
    mark = '마크',
    winwin = '윈윈',
    yuta = '유타'
}

var member = Nct127.mark;
console.log(member); // '마크'

// enum 활용 예제 - 드롭다운 등의 목록이 필요한 형태에서 정확한 형태를 제공할 때 사용.
enum Answer {
    yes = 'Y',
    no = "N",
}

function askQuestion(answer: Answer) {
    if(answer === Answer.yes){
        console.log('정답입니다');
    }

    if(answer === Answer.no){
        console.log('오답입니다');
    }
}

askQuestion(Answer.yes); 
askQuestion(Answer.no);
askQuestion('no'); // enum에서 제공하는 값만을 넣을 수 있다.
