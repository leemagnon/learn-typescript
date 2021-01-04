/* Mapped Type : 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법. 
 마치 JS의 map() API함수를 타입에 적용한 것과 같은 효과 가짐. */

 type Heroes = 'Hulk' | 'Capt' | 'Thor';
 type HeroAges = { [K in Heroes]: number }; // { [ P in K ] : T }

 const ages: HeroAges = {
    Hulk: 33,
    Capt: 100,
    Thor: 1000
 };