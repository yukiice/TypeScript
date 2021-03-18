const arr: number[] = [1, 2, 3, 5, 5];

console.log(
  arr.map((x) => {
    return x > 2;
  })
);

console.log(arr.map(x=>{
    return x+2
}))

export {};

