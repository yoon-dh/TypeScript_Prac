let title = document.querySelector("#title");

// html narrowing 1. type 정하기
if (title !== null) {
  title.innerHTML = "hello";
}

// html narrowing 2. instanceof
if (title instanceof Element) {
  title.innerHTML = "hello";
}

// html narrowing 3. as keyword

let title2 = document.querySelector("#title") as Element;
title2.innerHTML = "hello";

// html narrowing 4. ? 연산자

if (title2?.innerHTML) {
  title2.innerHTML = "hello";
}

//==========================================================

let link = document.querySelector(".link");

if (link instanceof HTMLAnchorElement) {
  link.href = "https://kakao.com";
}

let btn = document.querySelector("#button");
btn?.addEventListener("click", () => {});
