const a: number[] = [1, 2, 3, 4, 5, 6, 7];

const b = a.entries();

console.log(b.next());

for (let i of b) {
  console.log(i);
}
