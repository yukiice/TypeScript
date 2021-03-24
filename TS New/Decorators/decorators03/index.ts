function methodDct(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const ori = descriptor.value;
  descriptor.value = function (...args: any) {
    console.log("params", ...args);
    const res = ori.call(this, ...args);
    console.log("res", res);
    return res;
  };
}

class Cl {
  @methodDct
  add(x: number, y: number) {
    return x + y;
  }
}

console.log(new Cl().add(1, 2));
