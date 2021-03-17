let a: number[] = [1, 2, 3, 4, 5, 6];

const reduces = (item: number) => {
  return item < 3;
};

console.log(a.every(reduces));

export {}

