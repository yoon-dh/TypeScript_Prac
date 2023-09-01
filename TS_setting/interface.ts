interface Square {
  color: string;
  width: number;
}

let nemo: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}
interface Teacher extends Student {
  age: number;
}

interface Product {
  brand: string;
  serialNumber: number;
  model: string[];
}

let product: Product = {
  brand: "Samsung",
  serialNumber: 1360,
  model: ["TV", "phone"],
};

interface MathObj {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let object: MathObj = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a - b;
  },
};
