// 1. type narrowing
// Narrowing 으로 판정해주는 문법들
// 1. typeof 변수
// 2. 속성명 in 오브젝트자료
// 3. 인스턴스 instanceof 부모
function myFunc(x) {
    if (typeof x === "number") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function myFunc2(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
// type assertion : union type을 확정지어줄 때 사용 ( 디버깅용, 비상용 )
// 1. narrowing 할 때 사용
// 2. 무슨 타입이 들어올지 100% 확실할 때 사용
function myFunc3(x) {
    var array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
//
function cleaning(testArray) {
    var returnArray = [];
    testArray.forEach(function (item) {
        if (typeof item === "string") {
            returnArray.push(Number(item));
        }
        else {
            returnArray.push(item);
        }
    });
    return returnArray;
}
var test = ["1", 2, "3", 4];
console.log(cleaning(test));
//
function subject(x) {
    if (typeof x.subject === "string") {
        return x.subject;
    }
    else if (Array.isArray(x.subject)) {
        return x.subject[x.subject.length - 1];
    }
    else {
        return "없쪄";
    }
}
console.log(subject({ subject: ["english", "art"] }));
