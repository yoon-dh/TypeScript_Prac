function myFuncRest(...a: number[]) {}

let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2];

// destructuring

let testArr = ["hello", 100];

let [a1, a2] = testArr;

let { student, age } = { student: true, age: 20 };

//

function returnMax(...nums: number[]): number {
  let max = 0;
  nums.forEach((num) => {
    if (max < num) {
      max = num;
    }
  });
  return max;
}

//
interface objectType {
  user: string;
  comment: number[];
  admin: boolean;
}

function objectParam({ user, comment, admin }: objectType): void {
  console.log(user, comment, admin);
}

//

type ArrayType = (number | string | boolean)[];

function ArrayT([a, b, c]: ArrayType) {
  console.log(a, b, c);
}
