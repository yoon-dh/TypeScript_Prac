var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    // protoype 함수 넣는 자리
    Human.prototype.funcfunc = function (a) {
        console.log(a);
    };
    return Human;
}());
var mem1 = new Human("a");
var mem2 = new Human("b");
//
var Car = /** @class */ (function () {
    function Car(title, price) {
        this.title = title;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car("소나타", 3000);
var Word = /** @class */ (function () {
    function Word() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var nums = [];
        var strs = [];
        param.forEach(function (i) {
            if (typeof i === "string") {
                strs.push(i);
            }
            else {
                nums.push(i);
            }
        });
        this.num = nums;
        this.str = strs;
    }
    return Word;
}());
var obj = new Word("kim", 3, 5, "park");
