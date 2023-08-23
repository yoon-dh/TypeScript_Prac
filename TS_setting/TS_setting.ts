let nametype: string[] = ["kim", "123"];

let tsObject: { name?: string } = { name: "kim" };

type Mytype = string | number;

let 이름: Mytype = "kim";

//

function myFunc(x: number): number {
  return x * 2;
}

// tuple type
type Member = [number, boolean];

let John: Member = [123, true];

// object type

type Member2 = {
  [key: string]: string;
};

let Jonny: Member2 = {
  name: "kim",
  age: "123",
};
