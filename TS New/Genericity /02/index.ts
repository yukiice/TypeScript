interface Len {
  length: number;
}

function fn<T extends Len>(arg: T): T {
  console.log(arg.length, "这是长度");
  return arg;
}

console.log(fn<string>("2"));

interface DB<T> {
  insert(data: T): boolean;
  delete(data: T, id: number): boolean;
  select(data: T, id: number): boolean;
  update(data: T, id: number): boolean;
}

class Sql<T> implements DB<T> {
  insert(data: T): boolean {
    console.log(data);
    return true;
  }
  delete(data: T, id: number) {
    return true;
  }
  select(data: T, id: number) {
    return true;
  }
  update(data: T, id: number) {
    return true;
  }
}

class User {
  public username: string | undefined;
  public password: string | undefined;
}

let mySql = new Sql<User>();

mySql.insert({
  username: "yukiice",
  password: "10086",
});
