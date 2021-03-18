let arr: any = [1, 2, 4, 5, 6, 8, 3, 5];

const qqq = arr.sort((a: any, b: any) => {
  return a - b;
});

console.log(qqq,'简单排序');

var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic" },
  { name: "Zeros", value: 37 },
];

const sort = items.sort((a: any, b: any) => {
  return a.value - b.value;
});

console.log(sort,'正向排序');

const unsort = items.sort((a: any, b: any) => {
  return b.value - a.value;
});

console.log(unsort,'反向排序');

export {};
