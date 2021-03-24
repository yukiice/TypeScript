interface Person {
  name: string;
}
const person: Person = {
  name: "yukiice",
};
console.log(typeof person.name);

// keyof

type names = typeof person.name;

interface KeyOf {
  name: string;
  age: number;
}

type K1 = keyof KeyOf;

const qq: K1 = "name";

interface StringAutograph {
  [index: string]: string;
}
const strings: StringAutograph = { name: "yukiice" };

interface NumberAutograph {
  [index: number]: string | number;
}
const numbers: NumberAutograph = { 1: 1, 2: "2" };

// in
type keys = "第一个" | "第二个" | "第三个";

type obj = {
  [p in keys]: string | number;
};

const qs: obj = { 第一个: 1, 第二个: "2", 第三个: 3 };

// infer

type RsType<T> = T extends (args: any[]) => infer R ? R : any;

// extends

interface Ex {
  name: string;
}

function Names<T extends Ex>(name: T): T {
  console.log(name);
  return name;
}
Names({ name: "yukiice" });

// Partial

type Partials<T> = {
  [p in keyof T]?: T[p];
};

// TODO
interface Todo {
  title: string;
  description: string;
}

function TodoDemo(todo: Todo, fields: Partials<Todo>) {
  return { ...todo, ...fields };
}

const todo1 = {
  title: "yukiice",
  description: "holo world",
};

const todo2 = TodoDemo(todo1, {
  description: "holo todo2",
});

console.log(todo2, "this is todo");

// Readonly
interface Read {
  name: string;
}

let reads: Readonly<Read> = {
  name: "yukiice",
};

// reads.name = 'yyds'

// Record

interface Records {
  name: string;
}

type Rec<K extends keyof any, T> = {
  [S in K]: T;
};

type qqs = Rec<number, { name: "" }>;

let q: qqs = {
  1: {
    name: "",
  },
};

console.log(q);

// Pick

interface Todos {
  title: string;
  name: string;
  age: boolean;
}

type TodoPreview = Pick<Todos, "title" | "name">;

const todo: TodoPreview = {
  title: "holo",
  name: "yukiice",
};

console.log(todo, "this is todo");

// Exclude

type Ts = Exclude<"1 | 2", "2 | 3">;

//  back ====> 1

//  like
//  type Exclude<T,S> = T extends S ? never : T

type Tts = Exclude<"a" | "1", "a" | "2">;

const tts: Tts = "1";

// Omit

// type myOmit<T,K extends keyof T> = Pick<T,Exclude<keyof T,K>>

interface Omits {
  name: string;
  age: number;
}

type Me = Omit<Omits, "name">;

const omits: Me = {
  age: 15,
};
console.log(omits);

// returnType

// type myReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

function foos(a: string): Array<string> {
  return [a];
}

type FooReturnType = ReturnType<typeof foos>;

const qsss: FooReturnType = ["22"];
