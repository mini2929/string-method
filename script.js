console.log("test");

const h1 = document.querySelector("h1");
h1.innerText = "Test";

const h2 = document.querySelector("h2");
const linkURL = "http://www.naver.com";
h2.innerHTML = `<a href="${linkURL}">naver</a>`;

const h3 = document.querySelector("h3");
const h3_text = h3.innerText;
// h3 문자열을 0위치에서부터 50번째 위치까지 자른 뒤
// 자른 문자열을 다시 h3.innerText 프로퍼티에 대입해서 적용
h3.innerText.substring(0, 50);
console.log(h3.innerText.length);

if (h3_text.length > 50) {
    h3.innerText = h3_text.substring(0,50) + "...";
} else {
    n3.innerText = h3_text;
}

/* 조건문 if of 구문 for구문  화살표구문??? 을 활용해서 h3에 들어가는 문자값이 50글자가 안되면 해당 문자를 그대로 출력하고 50글자가 넘어가면 그 뒤 ... 말줄임표 추가
* 빈칸도 하나의 문자로 인식함
*/

if (h3_text.length > 30) h3.innerText = h3_text.substring(0,30) + "...";
else h3.innerText = h3_text;

h3.innerText = h3_text.length > 30 ? h3_text.substring(0,30) + '...' : h3_text;

// 함수패키징
// shortenText('h3',30);

function shortenText (elem, len){
    // 첫 번째 인수로 받은 문자값으로 DOM요소 선택
    const el = document.querySelector(elem);
    // 해당 요소의 문자값 변수에 할당
    const el_text = el.innerText;
    // 해당 돔요소에 innerText 프로퍼티에 대입되는 우항을 3항연산 처리 후 대입
    el.innerText =
        el_text.length > len ? el_text.substring(0, len) + "...":el_text;
}

// 전체 문자열에서 특정 문자값을 기준으로 분리해서 배열로 반환
const span_text = document.querySelector("span").innerText;
console.log(span_text); //'2024-09-19'

const text_arr = span_text.split("-");
console.log(text_arr); //['2024', '09', '19']

// 배열값을 특정 문자열로 이어서 하나의 문자열로 반환하는 함수
const new_text = text_arr.join(".");
console.log(new_text); //'2024.09.19'

// 위의 split과 join을 한번에 같이 map을 활용해서 연산 간소화하는 방법 한번에 연산처리!
const h4_text = document.querySelector("h4").innerText;
const new_h4 = h4_text.split(" ").join("/");
console.log(new_h4);

// mission = 위의 구문을 다음과 같은 형태의 함수로 패키징
// changeText('h2',' ','/')

function changeText(a,b,c) {
    const element = document.querySelector(a);
    const text2 = element.innerText;
    /*
    const new2 = text2.split(b).join(c);
    element.innerText = new2; // HTML 요소의 텍스트를 변경
    console.log(new2);
    */
    element.innerText = text2.split(b).join(c);
}

changeText('h5',' ',' - ');
changeText('h4',' ','/');


