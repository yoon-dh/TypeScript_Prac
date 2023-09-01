class Human {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  // protoype 함수 넣는 자리
  funcfunc(a: string): void {
    console.log(a);
  }
}

let mem1 = new Human("a");
let mem2 = new Human("b");

//

class Car {
  title;
  price;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);

class Word {
  num;
  str;

  constructor(...param: (number | string)[]) {
    let nums: number[] = [];
    let strs: string[] = [];

    param.forEach((i) => {
      if (typeof i === "string") {
        strs.push(i);
      } else {
        nums.push(i);
      }
    });

    this.num = nums;
    this.str = strs;
  }
}

let obj = new Word("kim", 3, 5, "park");
