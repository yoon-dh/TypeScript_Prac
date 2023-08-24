type AnimalType = string | number | undefined;

type Animal = {
  name: string;
  age: number;
};

let animal: AnimalType;

let animal2: Animal;

// Object readonly

type FriendType = {
  readonly name: string;
};

const friend: FriendType = {
  name: "amber",
};

//  type 변수 끼리도 union type 으로 합치기 가능

type Name = string;
type Age = number;

type Person = Name | Age;

// & 연산자로 Object type extend

type PositionX = { x: number };
type PositionY = { y: number };

type NewType = PositionX & PositionY; //  ===> {x:number , y:number}

//

type thisType = {
  color?: string;
  size: number;
  readonly position: number[];
};

//

type User = {
  name: string;
  email?: string;
  phone: number;
};

//

type littleUser = User & { isAdult: boolean };

let testUser: littleUser = {
  name: "kim",
  isAdult: false,
  phone: 1234,
};
