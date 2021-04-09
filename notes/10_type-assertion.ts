// 타입 단언(type assertion) - 타입스크립트보다 개발자가 타입을 더 잘 알고 있다.
var a;
a = 20;
var b = a as string;

/* DOM API 조작 */
// <div id="app">hi</div>
var div = document.querySelector('div'); 
if(div){
    div.innerHTML
}