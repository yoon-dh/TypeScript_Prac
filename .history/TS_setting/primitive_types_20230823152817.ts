// 1. 변수 만들기

let name1: string = "kim";
let age: number = 12;
let isTrue: boolean = true;

// 2. Array

let member: string[] = ["kim", "park"];

// 3. object

let memObj: { name1: string; name2: string } = { name1: "kim", name2: "park" };

//

const songObj: { title: string; singer: string } = {
  title: "a",
  singer: "abc",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};

// 4. union Type

let mem: number | string = 123;

let memsArr: (number | string)[] = [1, "2", 3];

let memsObj: { a: string | number } = { a: 123 };
