const obj: any = new Object();

Object.defineProperties(obj, {
  name: {
    value: "yukiice",
    writable: false,
  },
  getname: {
    value: function () {
      return "qqq";
    },
    writable: true,
  },
});

console.log(obj.name, obj.getname());

export {};
