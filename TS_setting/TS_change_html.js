var title = document.querySelector("#title");
// html narrowing 1. type 정하기
if (title !== null) {
    title.innerHTML = "hello";
}
// html narrowing 2. instanceof
if (title instanceof Element) {
    title.innerHTML = "hello";
}
// html narrowing 3. as keyword
var title2 = document.querySelector("#title");
title2.innerHTML = "hello";
// html narrowing 4. ? 연산자
if (title2 === null || title2 === void 0 ? void 0 : title2.innerHTML) {
    title2.innerHTML = "hello";
}
//==========================================================
var link = document.querySelector(".link");
if (link instanceof HTMLAnchorElement) {
    link.href = "https://kakao.com";
}
var btn = document.querySelector("#button");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () { });
