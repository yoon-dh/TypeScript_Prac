var names;
function myfunc(a) {
    return 1;
}
// 가위,바위,보 만 파라미터 가능
// 가위,바위,보 만 들어올 수 있는 array return
function RSP(x) {
    return ["가위", "바위"];
}
//  as const : 1. object value 값을 그대로 타입으로 지정해줌 , 2, object 속성들에 모두 readonly 붙여줌
//  object 자료를 완전히 잠그고 literal type 으로 쓰고 싳을때 사용
var data = {
    name: "kim",
};
function myfunc1(a) { }
myfunc1(data.name);
