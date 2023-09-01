var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function myFuncRest() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
}
var arr = [1, 2, 3];
var arr2 = [4, 5];
var arr3 = __spreadArray(__spreadArray([], arr, true), arr2, true);
// destructuring
var testArr = ["hello", 100];
var a1 = testArr[0], a2 = testArr[1];
var _a = { student: true, age: 20 }, student = _a.student, age = _a.age;
//
function returnMax() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var max = 0;
    nums.forEach(function (num) {
        if (max < num) {
            max = num;
        }
    });
    return max;
}
function objectParam(_a) {
    var user = _a.user, comment = _a.comment, admin = _a.admin;
    console.log(user, comment, admin);
}
function ArrayT(_a) {
    var a = _a[0], b = _a[1], c = _a[2];
    console.log(a, b, c);
}
